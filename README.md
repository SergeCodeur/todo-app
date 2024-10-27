# Todo App

Une application de gestion des tâches avec un backend Node.js et un frontend React.

## Prérequis

- Node.js (v14.x ou supérieur)
- MongoDB (local ou hébergé)
- npm ou pnpm

## Installation

### Backend

  1. Clonez le dépôt :
     ```sh
     git clone https://github.com/SergeCodeur/todo-app.git
     cd todo-app/backend
      ```
  2. Installez les dépendances :
      ```sh
      pnpm install
      ```
  3. Configurez les variables d'environnement : Créez un fichier ```.env``` à la racine du répertoire backend et ajoutez les lignes suivantes :
    ``` DB_CONNECTION=mongodb://127.0.0.1:27017/todoapp
PORT=3000 ```
  
  4. Démarrez le serveur :
      ```sh
      pnpm start
      ```

### Frontend

  1. Naviguez vers le répertoire frontend :
      ```sh
      cd ../frontend
      ```
  2. Installez les dépendances :
      ```sh
      pnpm install
      ```
  3. Démarrez le frontend :
      ```sh
      pnpm run dev
      ```
