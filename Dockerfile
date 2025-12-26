# Utiliser une version légère de Node.js
FROM node:18-alpine

# Créer le dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du code source
COPY . .

# Construire l'application et la documentation
RUN npm run build
RUN npm run docs

# Exposer les ports utilisés
EXPOSE 8080
EXPOSE 8081

# Par défaut, on lance l'app (sera surchargé par docker-compose)
CMD ["npm", "start"]