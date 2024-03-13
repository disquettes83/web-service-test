# Web Service

## Introduzione
Questo è un progetto di web service sviluppato in Node.js utilizzando TypeScript e Express.js. Il servizio consente di interrogare un feed in tempo reale e offre endpoint per recuperare e filtrare i post.

## Requisiti
- Node.js
- TypeScript
- Redis
- npm

## Installazione
1. Clona il repository sul tuo computer:
git clone https://github.com/disquettes83/web-service-test.git

2. Entra nella directory del progetto:

cd web-service

3. Installa le dipendenze del progetto:

npm install

4. Avvia il server:

npm start


## Utilizzo
- L'API del web service è documentata utilizzando Swagger. Per visualizzare la documentazione, avvia il server e visita http://localhost:3000/api-docs nel tuo browser.

## Endpoint
- **GET /posts**: Recupera tutti i post.
- **GET /posts-filtered**: Recupera i post filtrati per titolo e numero.

## Configurazione
- Il server utilizza Redis come sistema di cache. Assicurati che Redis sia installato e in esecuzione sul tuo sistema.