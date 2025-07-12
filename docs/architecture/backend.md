---
sidebar_position: 11
title: Backend
---

# Backend


O backend do HypeBet é o motor que impulsiona a coleta de dados, a comunicação com os smart contracts e o serviço de informações para o frontend. Ele é projetado para ser robusto, escalável e eficiente, garantindo que a plataforma funcione de forma suave e confiável.

## Coleta de Hype (AI Agent / Cronjob)

*   **Fontes de Dados:** O backend se conecta às APIs do Twitter, Telegram e Discord para coletar dados de hype em tempo real, com base nas hashtags definidas para cada jogo.
*   **Processamento de Linguagem Natural (PLN):** Um módulo de PLN em Python é utilizado para analisar o sentimento (positivo, negativo, neutro) e o contexto das postagens, garantindo que o score de hype seja preciso e relevante.
*   **Normalização de Dados:** Técnicas estatísticas, como médias móveis e bandas de Bollinger, são aplicadas para normalizar os dados de hype, mitigando picos anormais e prevenindo manipulações.
*   **Escalabilidade:** Para o hackathon, um cronjob simples é utilizado para a coleta de dados. Para a produção, a arquitetura será projetada para ser escalável, utilizando filas de mensagens (como Kafka ou RabbitMQ) e serviços de nuvem que permitam o escalonamento automático.

## Armazenamento e Serviço de Dados

*   **GraphQL API:** Uma API GraphQL é exposta para o frontend, permitindo que ele consulte de forma eficiente os dados de hype, jogos, apostas e outras informações necessárias para a interface do usuário.

## Interação com Smart Contracts

*   **Oracle Centralizado (V1):** Na versão inicial, o backend é responsável por chamar a função `updateHype` no contrato `Oracle.sol` para registrar o score de hype mais recente.
*   **Chainlink External Adapter (V2):** Para a versão 2, o backend atuará como um Chainlink External Adapter. Ele receberá requisições do oráculo Chainlink para fornecer o score de hype, que será então enviado para o smart contract de forma descentralizada.

## Gerenciamento de Jogos (Admin)

*   **APIs para Admin:** O backend fornece endpoints seguros para o administrador da plataforma criar, iniciar, finalizar e cancelar jogos, além de monitorar o sistema e gerenciar o botão de pânico.
