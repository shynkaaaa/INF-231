<template>
  <div>
    <label>Email:</label>
    <input
      type="email"
      v-model="email"
      @input="validateEmail"
      :class="{ 'invalid-email': !isValid }"
    />
    <p v-if="!isValid" class="error-message">Please enter a valid email address.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      isValid: true,
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isValid = emailRegex.test(this.email);
    },
  },
};
</script>

<style scoped>
.custom-input {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.invalid-email {
  border-color: red !important;
}

.error-message {
  color: red;
}
</style>
