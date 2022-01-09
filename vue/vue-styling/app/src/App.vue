<template>
  <body>
    <header>
      <h1>Vue Styling</h1>
    </header>
    <section>
      <!-- 1) Fetch the user input and use it as a CSS class -->
      <!-- The entered class should be added to the below paragraph -->
      <input type="text" v-model="userInput" />
      <!-- (available classes: "user1", "user2") -->
      <p :class="setClasses">Style me!</p>
      <button @click="toggle">Toggle Paragraph</button>
      <!-- 2) Use the "visible" and "hidden" classes to show/ hide the above paragraph -->
      <!-- Clicking the button should toggle between the two options -->

      <!-- 3) Add dynamic inline styling to the below paragraph and let the user enter a background-color -->
      <input type="text" v-model="userColor" />
      <p :style="{ backgroundColor: userColor }">Style me inline!</p>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
      visible: true,
      userColor: "",
    };
  },
  computed: {
    setClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.visible,
        hidden: !this.visible,
      };
    },
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style></style>
