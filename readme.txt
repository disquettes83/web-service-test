Documentazione del Progetto: Web Service REST API

Descrizione

Questo progetto implementa un web service che consente di interrogare un feed di post di WordPress tramite una REST API. Il servizio è sviluppato utilizzando Node.js, TypeScript ed Express.js, ed è progettato per essere eseguito su un server in cloud.


Funzionalità

1. Recuperare tutti i post

Il servizio fornisce un endpoint GET /posts che restituisce l'elenco completo di tutti i post presenti nel feed WordPress.


2. Recuperare post filtrati per titolo e numero

Il servizio offre un endpoint GET /posts-filtered?title=<testo>&items=<numero> che consente di recuperare un elenco di post filtrati in base ai seguenti criteri:

    title: filtro per i post che contengono la stringa specificata all'interno del titolo.
    items: numero massimo di post da restituire nell'elenco filtrato.


3. Caching delle risposte

Per migliorare le prestazioni, il servizio implementa un sistema di caching delle risposte utilizzando Redis. Quando viene effettuata una richiesta all'endpoint GET /posts-filtered, il servizio controlla prima se la risposta è presente nella cache. In caso affermativo, restituisce i dati memorizzati nella cache. Altrimenti, recupera i dati dal feed WordPress, filtra i risultati e memorizza la risposta nella cache per le successive richieste.


Requisiti

    Node.js
    TypeScript
    Express.js
    Redis (installato e in esecuzione)


Installazione e Avvio

    Clona la repository del progetto:

git clone <repository-url>


Installa le dipendenze del progetto:

npm install


Avvia il server:

npm start


Il server sarà in esecuzione all'indirizzo http://localhost:3000.


Documentazione dell'API

La documentazione dell'API è disponibile all'indirizzo http://localhost:3000/api-docs dopo aver avviato il server. Questa documentazione è generata utilizzando Swagger e descrive in dettaglio tutti gli endpoint disponibili, i parametri richiesti, le risposte previste e gli schemi di dati.


Struttura del Progetto

    server.ts: File principale che contiene la logica del server Express.js e le definizioni degli endpoint.
    swagger.js: File di configurazione per Swagger, utilizzato per generare la documentazione dell'API.
    package.json: File di configurazione di npm con le dipendenze del progetto e gli script di avvio.
    tsconfig.json: File di configurazione per il compilatore TypeScript.