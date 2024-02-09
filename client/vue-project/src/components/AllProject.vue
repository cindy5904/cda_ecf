<script setup>
import { ref, onMounted } from 'vue';
import { useProjectStore } from '../stores/project';
import { useAuthStore } from '../stores/auth';

const projectStore = useProjectStore();
const authStore = useAuthStore();
const projects = ref([]);

onMounted(async () => {
  try {
    
    const userId = authStore.userId;
    console.log(userId)
    await projectStore.AllProject(userId);

    projects.value = projectStore.projects;
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
  }
});
</script>
<template>
 <div>
    <h1>Tous les projets de l'utilisateur</h1>
    <ul>
      <li v-for="project in projects" :key="project.id_project">
        {{ project.name_project }} - {{ project.descriptions }}
      </li>
    </ul>
  </div>
</template>
<style scoped>
</style>