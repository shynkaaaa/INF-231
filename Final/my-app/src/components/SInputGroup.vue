<template>
  <div class="input-group">
    <label v-if="label">{{ label }}</label>
    <div class="input-container">
        <input
  :type="type"
  :value="value"
  @input="updateInput"
  :placeholder="placeholder"
  v-on:input="updateInput"
/>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
  margin-bottom: 8px;
}

.input-container {
  position: relative;
}

input {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
