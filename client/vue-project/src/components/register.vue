<script setup>
import { ref } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  try {
    const response = await axios.post("/api/signup", {
      username: username.value,
      email: email.value,
      password: password.value,
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
<form @submit.prevent="handleSubmit">
    <label for="username">Username:</label>
    <input v-model="username" required />

    <label for="email">Email:</label>
    <input type="email" v-model="email" required />

    <label for="password">Password:</label>
    <input type="password" v-model="password" required />

    <button type="submit">Register</button>
  </form>

</template>

<style scoped>

</style>