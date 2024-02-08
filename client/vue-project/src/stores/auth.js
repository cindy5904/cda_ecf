import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', () => {
  const data = ref(null);
  const error = ref(null);

  const register = async (username, email, password) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/signup`, {username : username, email: email, password: password});
      console.log('Réponse du serveur:', response);
      data.value = response.data.results;
      error.value = null;

    } catch (err) {
      console.error('Erreur lors de la récupération des données:', err);
      error.value = 'Erreur lors de la récupération des données';
    }
  };

  return {
    data,
    error,
    register,
  };
});


