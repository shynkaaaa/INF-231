<template>
  <div class="checkbox-container" @click="toggleCheckbox">
    <input type="checkbox" :checked="isChecked" />
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: this.value,
    };
  },
  methods: {
    toggleCheckbox() {
      this.isChecked = !this.isChecked;
      this.$emit('input', this.isChecked);
    },
  },
};
</script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

input[type="checkbox"] {
  margin-right: 8px;
}
</style>
