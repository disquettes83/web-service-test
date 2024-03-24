# Usa un'immagine di base di Node.js
FROM node:14

# Imposta la directory di lavoro all'interno del contenitore
WORKDIR /app

# Copia il package.json e il package-lock.json nella directory di lavoro
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice nell'immagine
COPY . .

# Espone la porta del server
EXPOSE 3000

# Comando predefinito per eseguire l'applicazione
CMD ["npm", "start"]
