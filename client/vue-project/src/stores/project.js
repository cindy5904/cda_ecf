import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useProjectlStore = defineStore('project', () => {
    const data = ref(null);
    const error = ref(null);
    const project = async (name_project, descriptions, userId) => {
        try {
          const response = await axios.post(`http://localhost:3000/project/create`, {name_project: name_project, descriptions: descriptions, userId: userId,});
          console.log('Réponse du serveur:', response);
          data.value = response.data.results;
          error.value = null;
        } catch (err) {
          console.error('Erreur lors de la récupération des données:', err);
          error.value = 'Erreur lors de la récupération des données';
        }
      };
      return {
       project
      };
});
    
 