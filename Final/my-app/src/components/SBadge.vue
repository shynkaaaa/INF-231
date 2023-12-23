<template>
  <span class="badge" :class="badgeType">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    badgeType: {
      type: String,
      default: "default",
      validator: (value) => ["default", "primary", "info", "success", "warning", "danger"].includes(value),
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  font-size: 0.8em;
  font-weight: bold;
}

.default {
  background-color: #ecf0f1;
  color: #333;
}

.primary {
  background-color: #3498db;
  color: #fff;
}

.info {
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

.danger {
  background-color: #e74c3c;
  color: #fff;
}
</style>
