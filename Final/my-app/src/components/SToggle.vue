<template>
  <div class="toggle-switch" @click="toggleSwitch">
    <input type="checkbox" :checked="isChecked" class="toggle-input" />
    <div class="toggle-slider"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    toggleSwitch() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style scoped>
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;
}

.toggle-slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

.toggle-input:checked + .toggle-slider {
  background-color: #2196f3;
}

.toggle-input:checked + .toggle-slider:before {
  transform: translateX(26px);
}
</style>
