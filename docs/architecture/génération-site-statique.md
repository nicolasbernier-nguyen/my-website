---
sidebar_position: 2
---

# Génération du site statique

Lors de la génération du site statique, le thème est construit deux fois:
1. Lors du _server-side rendering_ le thème est compilé dans le [React DOM Server](https://reactjs.org/docs/react-dom-server.html). 
2. Lors du _client-side rendering_ le thème est compilé en JavaScript qui est ensuite exécuté dans le navigateur ce qui lui donne accès aux variables du navigateur.