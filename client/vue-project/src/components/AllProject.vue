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
  <h1>Liste de Projets</h1>
 <div class="container">
    <!-- <ul>
      <li v-for="project in projects" :key="project.id_project">
        {{ project.name_project }} - {{ project.descriptions }}
      </li>
    </ul> -->
    
    <div class="card">
      <h2>Projet 1</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
      <router-link to="/project" class="task-button">Tâche</router-link>
    </div>

    <div class="card">
      <h2>Projet 2</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
      <router-link to="/project" class="task-button">Tâche</router-link>
    </div>

    <div class="card">
      <h2>Projet 3</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
      <router-link to="/project" class="task-button">Tâche</router-link>
    </div>

    <div class="card">
      <h2>Projet 4</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
      <router-link to="/project" class="task-button">Tâche</router-link>
    </div>

    <div class="card">
      <h2>Projet 5</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
      <router-link to="/project" class="task-button">Tâche</router-link>
    </div>
    <div class="card">
      <h2>Projet 6</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
      <router-link to="/project" class="task-button">Tâche</router-link>
    </div>

  </div>
</template>
<style scoped>
h1{ 
  text-align: center;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}
 .card {
  border: 1px solid rgb(246, 242, 242);
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  width: 350px;
  height: 200px;
  box-shadow: 0 4px 30px rgba(0,0,0,0.1);
  background-color: rgb(241, 233, 233);
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
    }
.card:hover {
  transform: scale(1.1);
}    
.card h2 {
  text-align: center;
}

.task-button {
  display: block;
  text-align: center;
  padding: 10px;
  margin-top: 30px;
  background-color: #ead3d9;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  color: black;
}
.task-button:hover {
  background-color: #cbbbc2;
}
</style>