<script setup>
import { ref, onMounted , computed} from 'vue';
import { useProjectStore } from '../stores/project';
import { useAuthStore } from '../stores/auth';

const projectStore = useProjectStore();
const user = useAuthStore();
// const projects = computed(() => projectStore.project);

onMounted( () => {
  try {
     projectStore.AllProject(user.id);
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
  }
});
</script>
<template>
  <h1>Liste de Projets</h1>
 <div class="container">
    <div class="card">
      <div class="cinema">
        <img src="../assets/sallecinema.jpg" alt="salle de cinéma" class="cinemaImg">
      </div>
      <div class="content">
        <h2>Le Palais du Film</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
          <div class="btn">
            <button>voir les tâches</button>
            <button>modifier</button>
            <button>supprimer</button>
          </div>
      </div>
      
    </div>

    <div class="card">
      <div class="cinema">
        <img src="../assets/voit.jpg" alt="voiture" class="voitureImg">
      </div>
      <div class="content">
        <h2>Pilote Xtrême</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
          <div class="btn">
            <button>voir les tâches</button>
            <button>modifier</button>
            <button>supprimer</button>
          </div>
      </div>   
    </div>

    <div class="card">
      <div class="cinema">
        <img src="../assets/voyage.jpg" alt="salle de cinéma" class="cinemaImg">
      </div>
      <div class="content">
        <h2>Repos à l'horizon</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
          <div class="btn">
            <button>voir les tâches</button>
            <button>modifier</button>
            <button>supprimer</button>
          </div>
      </div>
     </div>

    <div class="card">
      <div class="the">
        <img src="../assets/the.jpg" alt="thé en vrac" class="the">
      </div>
      <div class="content">
        <h2>Infusion pure</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
          <div class="btn">
            <button>voir les tâches</button>
            <button>modifier</button>
            <button>supprimer</button>
          </div>
      </div>  
    </div>

    <div class="card">
      <div class="wars">
        <img src="../assets/wars.jpg" alt="paysage apocalyptique" class="warsImg">
      </div>
      <div class="content">
        <h2>Dévastation Mortelle</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
          <div class="btn">
            <button>voir les tâches</button>
            <button>modifier</button>
            <button>supprimer</button>
          </div>
      </div>   
     </div>
    <div class="card">
      <div class="sushi">
        <img src="../assets/sushi.jpg" alt="restaurant japonais" class="restoImg">
      </div>
      <div class="content">
        <h2>Sushi Shop</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum?</p>
          <div class="btn">
            <button>voir les tâches</button>
            <button>modifier</button>
            <button>supprimer</button>
          </div>
      </div>
    </div>
     
  </div>
  <ul class="project_data">
    <li v-for="project in projectStore.project" :key="project.id_project">
        {{ project.name_project }} - {{ project.descriptions }}
      </li>
    </ul>
    
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

img {
  width: 100%;
  height: 230px;
  border-radius: 5px;

}

 .card {
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 350px;
  height: 450px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
    }
.card:hover {
  transform: scale(1.1);
}    
.card h2 {
  text-align: center;
}
.content p {
  padding: 10px;
}

.btn {
  display: flex;
  gap: 10px;
  justify-content: center; 
  }

  .btn button {
    background: linear-gradient(to right, #c5ccd9, #d9deeb); 
    border: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
  }

  .project_data {
    height: 100px;
    color: black;
  }
</style>