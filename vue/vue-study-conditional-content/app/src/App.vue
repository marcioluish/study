<template>
  <body>
    <header>
      <h1>Vue Lists and Conditional Content</h1>
    </header>
    <section id="assignment">
      <h2>Assignment</h2>
      <!-- 1) Add code to manage a list of tasks in a Vue app -->
      <!-- When clicking "Add Task" a new task with the entered text should be added -->
      <input type="text" v-model="userInput" />
      <button @click="addTask">Add Task</button>
      <ul v-show="showTasksList === true">
        <li
          v-for="(task, index) in tasks"
          :key="task"
          @click="removeTask(index)"
        >
          {{ task }} - {{ index }}
        </li>
        <!-- 2) Output the list of tasks here -->
      </ul>
      <!-- 3) When the below button is pressed, the list should be shown or hidden -->
      <!-- BONUS: Also update the button caption -->
      <button @click="showList">
        {{ !showTasksList ? "Show List" : "Hide List" }}
      </button>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
      tasks: [],
      showTasksList: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.userInput);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    showList() {
      this.showTasksList = !this.showTasksList;
    },
  },
};
</script>

<style></style>
