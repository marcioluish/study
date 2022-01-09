<template>
  <section>
    <form @submit.prevent="addActiveUser">
      <input v-model="enteredName" type="text" placeholder="Your Name" />
      <input v-model="enteredAge" type="text" placeholder="Your Age" />
      <div><button>Add User</button></div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  emits: {
    "add-user": function (userData) {
      console.log(`$$$$$ ${!userData.name || !userData.age}`);
      if (!userData.name || !userData.age) {
        console.warn("User data must contain a name and age!!!");
        log.error('adfasf')
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    addActiveUser() {
      const userData = {
        name: this.enteredName,
        age: this.enteredAge,
      };

      this.$emit("add-user", userData);
    },
  },
};
</script>
