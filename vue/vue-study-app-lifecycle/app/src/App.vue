<template>
  <body>
    <header>
      <h1>Vue Behind The Scenes</h1>
    </header>
    <section id="app">
      <h2>How Vue Works</h2>
      <input type="text" ref="userInput" />
      <button @click="setText">Set Text</button>
      <p>{{ message }}</p>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userInput.value;
    },
  },
};
</script>

<style></style>
