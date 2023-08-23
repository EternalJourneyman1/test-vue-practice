<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  color: 'red' | 'yellow' | 'green'
  isActive: Boolean
}>()

const color = ref(props.color)
</script>


<template>
  <div class="light-container">
    <div :class="['light', color]" :style="{ backgroundColor: isActive ? color : 'black' }"></div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
</style>
