<script setup>
import { onMounted, watch } from 'vue';
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import router from '../router/index';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    console.log('Tentative de connexion...');
    await authStore.login(email.value, password.value);
    if (authStore.isLoggedIn) {
      console.log('Connexion réussie. Redirection vers la page d\'accueil...');
      
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
};




</script>
<template>
<div class="bg-container">
  <div class="container-form">
  <h1>Connexion</h1>
  <form @submit.prevent="login" class="form-bloc">
    <div class="form-groupe">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
    </div>
    <div class="form-groupe">
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
    </div>
    <button type="submit" class="action-button">connexion</button>
  </form>
</div>
</div>
</template>
<style scoped>
.container-form {
  width: 400px; 
  height: 400px; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 90px auto;
}
h1 {
  background: linear-gradient(to right, #0b1113, #2d7a5b); 
    -webkit-background-clip: text;
    color: transparent; 
    padding-top: 50px;
    text-align: center;
}
.form-bloc {
  display: flex;
  flex-direction: column; 
  max-width: 200px; 
  margin: auto; 
}

.form-groupe {
  margin-bottom: 10px; 
}

label {
  display: block; 
  margin-bottom: 5px; 
}

input {
  width: 190px;
  padding: 5px 0;
  border-radius: 5px;
  border: 1px solid #cccccc; 
  transition: border-color 0.3s ease;
}
input:focus {
  outline: #b1afaf; 
}
.action-button {
  border-radius: 15px;
  padding: 10px 10px; 
  background-color: #ffffff;
  border: 1px solid #cccccc; 
  cursor: pointer; 
  margin-top: 10px;
  text-decoration: none;
  color: #0b1113;
  text-align: center;

}
</style>