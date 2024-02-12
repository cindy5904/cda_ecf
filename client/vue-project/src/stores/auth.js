import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router';

export const useAuthStore = defineStore('auth', () => {
  const data = ref(null);
  const error = ref(null);
  const user= ref(null);
  const token = ref(null);

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
  
  const login = async (email, password) => {
    try {
      console.log('Charge utile de la demande de connexion :', { email, password }) ;
      const response = await axios.post(`http://localhost:3000/api/login`, {email: email, password: password});
      console.log('Réponse du serveur:', response);
      // localStorage.setItem("token", response.data.token)
      // token.value = response.data.token;
      // data.value = response.data.results;
      // error.value = null;
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        token.value = response.data.token;
        data.value = response.data.results;
        error.value = null;
  
        
        router.push('/');
      } else {
        console.error('La demande de connexion a échoué.');
        error.value = 'La demande de connexion a échoué.';
      }

    } catch (err) {
      console.error('Erreur lors de la récupération des données:', err);
      error.value = 'Erreur lors de la récupération des données';
    }
  };
  const logout = async () => {
    try {
      await axios.post('http://localhost:3000/api/logout');
  
      localStorage.removeItem('token');
  
     
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };
  return {
    data,
    error,
    register,
    login,
    logout
    
  };
});


