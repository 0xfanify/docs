---
sidebar_position: 10
title: Oracle
---

# Oracle

In the HypeBet ecosystem, the **Oracle** serves as a critical bridge between on-chain smart contracts and off-chain data sources. It ensures that real-world inputs—namely, social sentiment ("hype") and match results—are delivered securely and verifiably to smart contracts.

---

## Oracle Version 1 — Current Implementation

* **Manual Data Feed:**
  Hype scores (`HypeA`, `HypeB`) are aggregated by our backend from social platforms (e.g., Twitter, Discord), then pushed to the `Oracle.sol` contract—either manually or via an admin interface.

* **Match Results:**
  Game outcomes and scores are similarly updated by a centralized administrator.

* **Known Limitation:**
  This model is centralized—both hype and result data rely on trusted actors, which introduces potential for manipulation or delays.

---

## Oracle Version 2 — Roadmap

* **Planned Upgrade:**
  Integration with a decentralized oracle network (e.g., Chainlink or Pyth) to automate and verify data inputs directly via smart contracts, eliminating centralized trust.

---

## Audit & Validation: FanX & Chiliz Data

To support your integration claims, I validated current metrics for FanX and Chiliz:

* **FanX Protocol TVL:**

  * $5.83 M locked in Chiliz Chain pools (per DefiLlama, updated May 2025) ([defillama.com][1], [fanx.gitbook.io][2]).

* **Chiliz Chain TVL:**

  * $6.52–6.73 M across DeFi protocols (DefiLlama, May 2025) ([defillama.com][3]).

These figures confirm significant activity and liquidity within the ecosystem, strengthening the case for yield-driven staking via FanX.

---

## Summary Table

| Oracle Version | Data Source     | Trust Model   | Decentralization Level |
| -------------- | --------------- | ------------- | ---------------------- |
| v1             | Backend + Admin | Centralized   | Low                    |
| v2 (2025+)     | Chainlink/Pyth  | Decentralized | High                   |


