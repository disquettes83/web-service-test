# Web Service Test

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

3. Entra nella directory del progetto:  
   cd web-service-test

3. Installa le dipendenze del progetto:  
   npm install

5. Avvia il server:  
   npm start


## Utilizzo
- L'API del web service è documentata utilizzando Swagger. Per visualizzare la documentazione, avvia il server e visita http://localhost:3000/api-docs nel tuo browser.

## Endpoint
- **GET /posts**: Recupera tutti i post.
- **GET /posts-filtered**: Recupera i post filtrati per titolo e numero.

### Esempi
1. **Recupero di tutti i post:**
   - Per recuperare tutti i post, fai una richiesta GET a `/posts`.
     http://localhost:3000/posts

2. **Filtraggio dei post per titolo e numero:**
   - Per filtrare i post in base al titolo e al numero massimo di post da restituire, fai una richiesta GET a `/posts-filtered` con i parametri `title` e `items`. Ad esempio:
     - `/posts-filtered?title=esempio&items=5` restituirà i primi 5 post che contengono "esempio" nel titolo.


## Configurazione
- Il server utilizza Redis come sistema di cache. Assicurati che Redis sia installato e in esecuzione sul tuo sistema.


***Edit per test log***
***Edit per test log***
***Edit per test log***
***Edit per test log***
***Edit per test log***
