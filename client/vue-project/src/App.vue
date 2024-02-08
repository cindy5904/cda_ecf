<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<header class="header">
      <div class="nav">
        <ul class="nav-home">
          <li>Accueil</li>
          <li>Project</li>
          <li><RouterLink to="/login" id="color">Connexion</RouterLink></li>
          <li><RouterLink to="/register" id="color">Inscription</RouterLink></li>
        </ul>
      </div>
    </header>
    <div id="app">
    <RouterView />
  </div>
</template>

<style scoped>
.header {
  height: 80px;
  width: 100%;
  background: linear-gradient(to bottom, #333, #626262);
  display: flex;
  align-items: center;
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

</style>
