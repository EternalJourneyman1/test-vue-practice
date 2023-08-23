<script setup lang="ts">
import { Color, ChangeActiveLight } from '@/types';

// defines props for compon
defineProps<{ 
	activeColor: Color,
	changeActiveLight: ChangeActiveLight;
	showModal: {
		type: Boolean
		default: false
	}
}>()
const showModal = defineModel<Boolean | undefined>('showModal', { required: true })


</script>

<template>
	<teleport to="#modal">
	    <div v-if="showModal" class="modal">
	      <div class="modal-content-container">
	        <div class="modal-content">
	          <h2>Traffic Light</h2>
	          <p>The light is currently {{ activeColor }}</p>
	
	          <button @click="changeActiveLight(activeColor, 'red')" :style="{ backgroundColor: 'red' }">
	            Red
	          </button>
	          <button @click="changeActiveLight(activeColor, 'yellow')" :style="{ backgroundColor: 'yellow' }">
	            Yellow
	          </button>
	          <button @click="changeActiveLight(activeColor, 'green')" :style="{ backgroundColor: 'green' }">
	            Green
	          </button>
	        </div>
	        <div class="close-modal">
	          <button @click="showModal = false">Close Modal</button>
	        </div>
	      </div>
	    </div>
	  </teleport>
</template>
