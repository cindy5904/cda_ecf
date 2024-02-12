<script setup>
import { ref } from 'vue';
import { useProjectStore } from '../stores/project';
import { useAuthStore } from '../stores/auth';

const projectStore = useProjectStore();
const name_project = ref('');
const descriptions = ref('');

const project = async () => {
    try {
        // const token = localStorage.getItem('token');
        await projectStore.createProject(name_project.value, descriptions.value);

        name_project.value = '';
        descriptions.value = '';
    } catch (error) {
        console.error('Erreur lors de la création du projet:', error);
    }
};
</script>
<template>
<div class="bg-container">
  <div class="container-form">
  <h1>Créer un projet</h1>
  <form @submit.prevent="project" class="form-bloc">
    <div class="form-groupe">
      <label for="name_project">Nom du projet:</label>
      <input type="text" v-model="name_project" required />
    </div>
    <div class="form-groupe">
      <label for="descriptions">Description:</label>
      <textarea id="descriptions" v-model="descriptions" required></textarea>
    </div>
    <!-- <router-link to="/project" class="action-button">Créer</router-link> -->
    <button  type="submit" class="action-button">Créer</button>

  </form>
</div>
</div>
</template>
<style scoped>
.bg-container {  
  background-color: #f0f0f0;
  width: 400px;
  height: 350px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  margin: 150px auto;
}

.card {
  padding: 20px;
  background-color: #ffffff;
}

h1 {
  background: linear-gradient(to right, #0b1113, #86aae9);
  -webkit-background-clip: text;
  color: transparent;
  padding-top: 10px;
  text-align: center;
}

.form-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  transition: border-color 0.3s ease;
  margin-bottom: 5px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #d5dce9;
}

.action-button {
  margin: 15px auto;
  width: 80px;
  text-align: center;
  background-color: #8193c7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.action-button:hover {
  background-color: #9bb4eb;
}
</style>