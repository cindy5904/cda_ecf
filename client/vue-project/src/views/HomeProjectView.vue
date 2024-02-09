<script setup>

</script>
<template>
 <div class="card-user">
    <div class="avatar-container">
        <img src="../assets/user.png" alt="avatar" class="avatar">
    </div>
    <div class="user-info">
      <h2>Mon Profil</h2>
      <p><strong>Nom:</strong> LeMytho</p>
      <p><strong>Prénom:</strong> Jeremy</p>
      <p><strong>Localité:</strong> Arras</p>
      <p><strong>Description:</strong> Menteur compulsif</p>
      <p><strong>Email:</strong> jeremylemytho@gmail.com</p>
    </div>
    <div class="actions">
        <router-link to="/project" class="action-button">Créer un Projet</router-link>
        <router-link to="/allproject" class="action-button">Afficher les projets</router-link>
    </div>
  </div>
</template>
<style scoped>
.card-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.avatar-container {
  margin-bottom: 16px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  text-align: center;
  margin-bottom: 16px;
}

.actions button, a {
  margin: 8px;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #95b2f2;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
}

.actions button:hover, a:hover{
  background-color: #a7b1d1;
}
</style>