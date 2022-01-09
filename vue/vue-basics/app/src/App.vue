<template>
  <body>
    <header>
      <h1>Vue Events</h1>
    </header>
    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="add(10)">Add 10</button>
      <button v-on:click="reduce(5)">Remove 5</button>
      <p>Result: {{ counter }}</p>
      <input type="text" v-model="name" />
      <input type="text" v-model="lastName" />
      <button v-on:click="resetInput">Reset input</button>
      <p>Your name: {{ fullName }}</p>
      <form v-on:submit.prevent="submitForm">
        <input type="text" />
        <button>Sign up</button>
      </form>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastName: "",
      counter: 0,
    };
  },
  watch: {
    counter(value) {
      if (value > 50 || value < 0) this.counter = 0;
    },
  },
  computed: {
    fullName() {
      console.log("running again");
      if (this.name === "" || this.lastName === "") return "";
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    setFullName() {
      console.log("running again");
      if (this.name === "") return "";
      return this.name + " " + "Hamasaki";
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
  },
};
</script>

<style></style>
