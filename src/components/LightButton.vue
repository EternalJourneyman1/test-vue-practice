<script lang="ts" setup>
import { ChangeActiveLight } from '@/types';
import { ref, inject } from 'vue'

type Color = 'red' | 'yellow' | 'green'

// const color = ref<Color>('yellow')
//  define props for component? Look into other ways 
const props = defineProps(['color'])

const activeColor = inject('activeColor') as Color
const changeActiveLight = inject<ChangeActiveLight>('changeActiveLight')
</script>

<template>
  <div class="light-container">
    <button :class="['lightButton', color]" :style="{ backgroundColor: color }"
      @click="changeActiveLight ? changeActiveLight(activeColor, color) : null">{{ color }}</button>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-container {
  display: flex;
  width: auto;
}

.lightButton {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
</style>
