---
sidebar_position: 6
title: How to Calculate Odds?
---


# 📊 How to Calculate Odds?

Fanify introduces a decentralized model where odds are calculated transparently based on real-time social sentiment ("hype"). Here's how the process works:

## 🔁 Workflow Overview

1. **Data Collection:** Social media posts are gathered based on a campaign-specific hashtag (e.g., `#Chiliz_CHExPSG_20250713`).
2. **Sentiment Classification:** AI models classify each post with a probability of support for each team.  
   *Example:*  
   Tweet: "Vai PSG!!!" → Team A: 93%, Team B: 17%
3. **Vote Aggregation:** Each post contributes its scores to a weighted count.  
   Team A: 92, Team B: 48 → Total Votes: 140
4. **Hype Calculation:** The system calculates the normalized hype share using a time-smoothed approach (see Anti-Spam section):
   - HypeA = 92 / 140 = 65.71%
   - HypeB = 48 / 140 = 34.28%
5. **Odds Generation:** Using the hype distribution, the system calculates initial odds, subject to refinement based on the size of each betting pool.
6. **On-chain Storage:** All hype and match data is stored in a decentralized oracle and used in prize calculation within the smart contract.

---

## 🧠 Smart Contract Summary

The `FunifyClaim` contract performs the following:

- Validates if the user is eligible to claim a prize (match ended, no draw, valid bet, winner).
- Fetches hype data and match result from the oracle.
- Computes dynamic odds using `_getOdds()`.
- Calculates prize based on user's stake, odds, and the final pool.
- Deducts house fee and distributes rewards proportionally.

---

## 🧮 Mathematical Model

Let:

- $H_A$, $H_B$: Hype scores (e.g., 0.6571 and 0.3428)
- $P_A$, $P_B$: Total amount staked on Team A and B
- $O_A$, $O_B$: Calculated odds for Team A and B
- $a$: Amount the user staked
- $w \in \{A, B\}$: Winning team
- $f$: House fee (e.g., 5% → $f = 0.05$)
- $T = P_A + P_B$: Total prize pool

**1. Odds Calculation**  
Odds are inverse to the normalized hype score, adjusted to reflect risk:

$$
\large O_A = \frac{1}{H_A}, \quad O_B = \frac{1}{H_B}
$$

**2. Prize Pool after Fee**

$$
\large \text{PrizePool} = T \cdot (1 - f)
$$

**3. Total Weighted Winning Side**

$$
\large W =
\begin{cases}
P_A \cdot O_A, & \text{if Team A wins} \\
P_B \cdot O_B, & \text{if Team B wins}
\end{cases}
$$

**4. User Payout**

$$
\large \text{Payout} = \frac{a \cdot O_w \cdot \text{PrizePool}}{W}
$$

---

## 🛡️ Anti-Spam: Hype Normalization & Weighting

To mitigate spam, sybil attacks, and manipulation by influencers, we propose a multi-layered data weighting system that ensures hype changes gradually, requiring consistent support over time:

### 1. Reputation-Weighted Posts
Each post $p_i$ receives a weight $w_i$ based on:

- Account age
- Follower count
- Verified status
- Engagement (likes, RTs)
- Bot score (inverse)

$$
\large w_i = \alpha_1 \cdot \text{Age}_i + \alpha_2 \cdot \text{Engagement}_i + \alpha_3 \cdot \text{Verified}_i - \alpha_4 \cdot \text{BotScore}_i
$$

Where $\alpha_1, \alpha_2, \alpha_3, \alpha_4$ are tunable coefficients.

To limit the influence of any single user or coordinated group (e.g., an influencer and their followers), the weight is capped:

$$
\large w_i' = \min(w_i, w_{\text{max}})
$$

Where $w_{\text{max}}$ is the maximum weight per post (e.g., 10).

### 2. Penalizing Coordinated Posts
To prevent influencers from coordinating similar posts, a penalty is applied based on post similarity (e.g., using text embedding cosine distance):

$$
\large w_i'' = w_i' \cdot (1 - \beta \cdot \text{Similarity}_i)
$$

Where $\beta$ is a penalty factor (e.g., 0.5), and $\text{Similarity}_i \in [0,1]$ measures how similar the post is to others.

### 3. Time Decay (Opcional)
Weight diminishes over time before match start to avoid last-minute manipulation:

$$
\large w_i''' = w_i'' \cdot e^{-\lambda (T_{\text{match}} - t_i)}
$$

Where:

- $t_i$: timestamp of post
- $\lambda$: decay constant

### 4. Exponential Moving Average for Hype
To ensure hype changes gradually and resists sudden manipulation, an exponential moving average (EMA) is used. For each time interval (e.g., hourly), the hype for Team A is updated as:

$$
\large H_A(t) = \alpha \cdot S_A(t) + (1 - \alpha) \cdot H_A(t-1)
$$

Where:

- $H_A(t)$: Hype for Team A at time $t$
- $S_A(t)$: Weighted average support in the current interval, calculated as:

$$
\large S_A(t) = \frac{\sum_{i \in t} w_i''' \cdot s_i}{\sum_{i \in t} w_i'''}
$$

- $s_i \in [0,1]$: Support probability for Team A (Team B gets $1 - s_i$)
- $\alpha$: Smoothing factor (e.g., 0.1), controlling how slowly hype changes
- $H_A(t-1)$: Hype from the previous interval

The hype for Team B is:

$$
\large H_B(t) = 1 - H_A(t)
$$

This ensures the sum of all influence is bounded and requires consistent, high-quality posts over time to significantly alter the hype.

---

## ✅ Benefits

- **Sybil and influencer resistance:** Weighted participation, capped weights, similarity penalties, and EMA ensure that no single user or group can dominate hype without sustained effort.
- **Transparent math:** All formulas can be audited and reproduced.
- **Composable:** Can be extended with additional on-chain data sources (e.g., verified Discord accounts, fan NFTs, etc.)


