import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, computed } from 'vue';


export const useProjectStore = defineStore('project', () => {
    
    const error = ref(null);
    const token = ref(localStorage.getItem('token') || null);
    const project = ref([]);

    const setToken = (newToken) => {
        token.value = newToken;
        localStorage.setItem('token', newToken);
    };

    const createProject = async (name_project, descriptions) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/project/create',
                { name_project, descriptions },
                {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                }
            );

            console.log('Réponse du serveur:', response);
            error.value = null;
        } catch (err) {
            console.error('Erreur lors de la récupération des données:', err);
            error.value = 'Erreur lors de la récupération des données';
        }
    };
    const AllProject = async (userId) => {
        try {
        
            if (userId !== "null") {
                const response = await axios.get(
                    `http://localhost:3000/project/user/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token.value}`, 
                        },
                    }
                );
    
                project.value = response.data.results;
    
                console.log('Réponse du serveur:', response);
            } else {
                console.log('UserId est "null", ajustez votre logique côté client.');
            }
        } catch (err) {
            console.error('Erreur lors de la récupération des données:', err);
            error.value = 'Erreur lors de la récupération des données';
        }
    };
    return {
        createProject, 
        token,
        setToken,
        AllProject
    };
});
