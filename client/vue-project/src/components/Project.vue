<script setup>
import { ref } from 'vue';
import { useProjectStore } from '../stores/project';
import { useAuthStore } from '../stores/auth';


const projectStore = useProjectStore();
const authStore = useAuthStore();
const name_project = ref('');
const descriptions = ref('');

const project = async () => {
  try {
    const userId = authStore.userId;
    await projectStore.project(name_project.value, descriptions.value, userId);
    name_project.value = '';
    descriptions.value = '';
  } catch (error) {
    console.error('Erreur lors de la création du project:', error);
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
      <button type="submit">se connecter</button>
  </form>
</div>
</div>
</template>
<style scoped>

</style>