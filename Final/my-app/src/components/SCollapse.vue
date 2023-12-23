<template>
    <div>
      <div class="collapse-header" @click="toggleCollapse">
        <slot name="header">Toggle Collapse</slot>
      </div>
      <div v-show="isOpen" class="collapse-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleCollapse() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .collapse-header {
    cursor: pointer;
    padding: 1rem;
    background-color: #edf2f7;
    border-bottom: 1px solid #e2e8f0;
  }
  
  .collapse-content {
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
  }
  </style>
  