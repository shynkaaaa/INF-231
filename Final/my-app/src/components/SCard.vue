<template>
  <div class="card">
    <slot name="header">
      <div class="card-header">Default Header</div>
    </slot>
    <div class="card-body">
      <slot></slot>
    </div>
    <slot name="footer">
      <div class="card-footer">Default Footer</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SCard',
};
</script>

<style scoped>
.card {
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  overflow: hidden;
  margin: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.card-header {
  background-color: #edf2f7;
  padding: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
}

.card-body {
  padding: 1rem;
}

.card-footer {
  background-color: #edf2f7;
  padding: 0.75rem;
  border-top: 1px solid #e2e8f0;
}
</style>
