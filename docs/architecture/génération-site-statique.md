---
sidebar_position: 2
---

# Génération du site statique

Lors de la génération du site statique, le thème est construit deux fois:
1. Lors du _server-side rendering (SSR)_ le thème est compilé dans le [React DOM Server](https://reactjs.org/docs/react-dom-server.html). Le SSR produit des pages HTML statiques.
2. Lors du _client-side rendering (CSR)_ le thème est compilé en JavaScript qui est ensuite exécuté dans le navigateur ce qui lui donne accès aux variables du navigateur.

Puisque le SSR nous permet de _render_ notre code React en pages HTML statiques sans aucun contenu dynamique, React n'a qu'a corréler les éléments DOM avec le DOM virtuel dans son modèle. Cette étape s'appelle **l'hydratation**. Après que React ait hydraté la page, du côté CSR, le navigateur récupère et exécute d'autres codes JS pour fournir les éléments dynamiques. Puisqu'un _render_ statique vers des fichiers HTML est effectué puis déployé au lieu d'un _pre-render_ dynamique à chaque demande, on se retrouve avec un chargement plus rapide.

Dans l'ordre, le SSR produit des pages HTML statiques. Lorsque le site est généré, ces fichiers HTML sont les premier à arriver à l'écran du navigateur de l'utilisateur. Puis du côté CSR, le navigateur s'occupe des éléments dynamiques, soit la barre de navigation et la barre latérale.