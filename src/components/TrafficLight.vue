<script lang="ts" setup>
import { ChangeActiveLight, Color, ToggleModal } from '@/types';
import { defineComponent, inject } from 'vue'
import TrafficLightModal from './TrafficLightModal.vue'

const showModal = inject<Boolean>('showModal')
const activeColor = inject<Color>('activeColor')!

const toggleModal = inject<ToggleModal>('toggleModal')
const changeActiveLight = inject<ChangeActiveLight>('changeActiveLight')!
</script>


<template>
  <div class="container">
    <div id="trafficLight">
      <!--  Similar to React Portals but has a diff use case instead of things outside dom used to share "logic/state" across components in app -->
      <!-- For Content Distribution -->
      <slot name="trafficLight"></slot>
    </div>
    <div class="buttonContainer">
      <slot name="lightButton"></slot>
    </div>
    <button @click="toggleModal">Open Modal</button>
  </div>
  <!-- More like React Portals when you need things outside of the "DOM" i.e. pop-ups, modals etc. -->
  <!-- For Rendering outside  components template -->
  <TrafficLightModal :activeColor="activeColor" :changeActiveLight="changeActiveLight" v-model:showModal="showModal" />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.container {
  display: flex;
  flex-flow: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
}

.buttonContainer {
  width: 300px;
  display: flex;
  flex-flow: row;
  gap: 10px;

}

#trafficLight {
  background-color: grey;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-content {
  padding: 20px;
  max-width: 500px;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.close-modal {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 1rem;
  ;
}
</style>
