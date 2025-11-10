# 1️⃣ Choisir l'image de base
FROM node:24.9.0

# 2️⃣ Définir le répertoire de travail dans le conteneur
WORKDIR /app

# 3️⃣ Copier les fichiers de configuration (package.json, package-lock.json) avant le reste
# Cela permet de tirer parti du cache Docker (optimisation)
COPY package*.json ./

# 4️⃣ Installer les dépendances
RUN npm install

# 5️⃣ Copier le reste des fichiers du projet
COPY . .

# 6️⃣ Construire l'application (si tu veux la version production)
# RUN npm run build

# 7️⃣ Exposer le port (selon ton outil de dev, souvent 5173 pour Vite ou 3000 pour CRA)
EXPOSE 5173

# 8️⃣ Lancer l'application (en mode dev ou prod selon ton besoin)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

