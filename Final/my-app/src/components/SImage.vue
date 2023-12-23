<template>
  <div>
    <img :src="src" :alt="alt" :width="width" @click="handleImageClick" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "auto",
    },
  },
  methods: {
    handleImageClick() {
      // Add functionality for image click if needed
      console.log('Image clicked!');
    },
  },
};
</script>
