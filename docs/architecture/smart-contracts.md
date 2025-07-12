---
sidebar_position: 10
title: Smart Contracts
---

# Smart Contracts


Os smart contracts são a base do protocolo HypeBet, garantindo a lógica de negócio, a segurança e a transparência das operações. Eles são responsáveis por gerenciar o token $HYPE, as apostas, o cálculo de odds, a distribuição de prêmios e a interação com oráculos e plataformas de yield farming.

## Contratos Principais

*   **`HypeToken.sol`:** Este contrato gerencia o token $HYPE, que é o token de aposta da plataforma. Ele inclui funcionalidades para mintar e queimar tokens, além de ser o ponto de entrada para o stake de CHZ.

*   **`Oracle.sol` (Versão 1 - Centralizada):** Na versão inicial, este contrato atua como um oráculo centralizado, armazenando informações sobre os jogos, o hype e os resultados. Ele é alimentado por uma entidade controlada pelo admin. Para a V2, será substituído por uma solução descentralizada baseada em Chainlink.

*   **`Fanify.sol` (Contrato Principal de Apostas):** Este é o contrato central que orquestra as operações de aposta. Ele é modular, utilizando outros contratos para funcionalidades específicas:
