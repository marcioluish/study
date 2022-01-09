<template>
  <section>
    <h2>{{ name === "" ? "Name" : name }}</h2>
    <h3>{{ age === 0 ? "Age" : age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
