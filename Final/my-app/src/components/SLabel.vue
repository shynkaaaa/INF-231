<template>
  <span class="label" :class="labelType">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    labelType: {
      type: String,
      default: "default",
      validator: (value) => ["default", "success", "warning", "error"].includes(value),
    },
  },
};
</script>

<style scoped>
.label {
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 0.25em;
  font-weight: bold;
}

.default {
  background-color: #3498db;
  color: #fff;
}

.success {
  background-color: #2ecc71;
  color: #fff;
}

.warning {
  background-color: #f39c12;
  color: #fff;
}

.error {
  background-color: #e74c3c;
  color: #fff;
}
</style>
