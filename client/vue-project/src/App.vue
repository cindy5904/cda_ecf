<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore();
</script>

<template>
<header class="header">
      <div class="nav">
        <ul class="nav-home">
          <li>Accueil</li>
          <li><RouterLink to="/homeproject" id="color">Projet</RouterLink></li>
          <li><RouterLink to="/login" id="color">Connexion</RouterLink></li>
          <li><RouterLink to="/register" id="color">Inscription</RouterLink></li>
        </ul>
      </div>
    </header>
    <div id="app">
    <RouterView />
  </div>
  <!-- <footer>
    Tous Droits Réservés &copy;
</footer> -->
</template>

<style scoped>
.header {
  height: 80px;
  width: 100%;
  background: linear-gradient(to bottom, #333, #626262);
  display: flex;
  align-items: center;
  font-family: 'Preahvihear', sans-serif;
}

.nav {
  margin-left: 30px;
}
.nav-home {
    display: flex;
    align-items: center;
    list-style: none;
    padding: auto;
    margin: auto;
  }

  .nav-home li {
    padding: 20px;
    color: white; 
    font-weight: bold;
  }
  #color {
  color: white;
  font-family: 'Preahvihear', sans-serif;
  text-decoration: none;
}

footer {
    border-top: 1px solid #333;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: white;
    background: linear-gradient(to bottom, #333, #626262);
    margin-bottom: auto;
  }
</style>
