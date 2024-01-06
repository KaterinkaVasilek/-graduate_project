<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <svg>
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>
