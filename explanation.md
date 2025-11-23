Q1/

Fichier de configuration : eslint.config.mjs
Pour lancer l'analyse, exécutez "npm run lint". Cela scannera tous les fichiers JS dans src/ et signalera les problèmes selon les règles définies.



Q2/

# Initialise husky
npx husky init

# Configure le hook de pre-commit pour lancer lint-staged
echo "npx lint-staged" > .husky/pre-commit