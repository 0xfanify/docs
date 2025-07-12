---
sidebar_position: 10
title: Oracle
---

# Oracle


No contexto do HypeBet, o Oracle desempenha um papel crucial na alimentação de dados externos (off-chain) para os smart contracts (on-chain). Essencialmente, ele atua como uma ponte, garantindo que informações do mundo real, como o "hype" das redes sociais e os resultados dos jogos, possam ser utilizadas de forma confiável e segura pelos contratos inteligentes.

## Oracle Centralizado (Versão 1 - Hackathon)

Na versão inicial do protocolo (e para fins de hackathon), utilizamos um `Oracle.sol` centralizado. Neste modelo:

*   **Alimentação Manual/Backend:** O score de hype (HypeA e HypeB) é coletado pelo backend a partir das redes sociais e, em seguida, enviado manualmente (ou via uma função controlada pelo admin) para o contrato `Oracle.sol`.
*   **Resultados de Jogos:** Da mesma forma, os resultados finais dos jogos (placar) são atualizados no `Oracle.sol` por uma entidade centralizada (o admin).
*   **Limitação:** Embora funcional para prototipagem, este modelo centralizado apresenta um ponto de falha único e um risco de manipulação, pois a integridade dos dados depende da confiança na entidade que os alimenta.
