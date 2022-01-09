<template>
  <div>
    <user-data :name="user.name" :age="user.age"></user-data>
    <active-user @add-user="handleUserData"></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: 0,
      },
    };
  },
  methods: {
    handleUserData(userData) {
      this.user = {
        name: userData.name,
        age: +userData.age,
      };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
