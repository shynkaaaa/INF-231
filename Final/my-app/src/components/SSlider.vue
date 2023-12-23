<template>
  <div class="form-slider">
    <label>{{ label }}</label>
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      @input="updateSlider"
    />
    <span>{{ sliderValue }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Number,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      sliderValue: this.value || this.min,
    };
  },
  methods: {
    updateSlider(event) {
      this.sliderValue = parseInt(event.target.value, 10);
      this.$emit('input', this.sliderValue);
    },
  },
};
</script>

<style scoped>
.form-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 80%;
  margin: 8px 0;
}

span {
  font-weight: bold;
}
</style>
