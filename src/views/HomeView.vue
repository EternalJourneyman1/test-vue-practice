<template>
  <div class="home">
    <TrafficLight>
      <template v-slot:trafficLight>
        <Light v-for="color in colors" :key="color" :color="color" :isActive="activeColor === color" />
      </template>

      <template v-slot:lightButton>
        <div class="buttonContainer">
          <LightButton v-for="color in colors" :key="color" :color="color" :isActive="activeColor === color" />
        </div>
      </template>
      <!-- <Light color="red" :isActive="activeColor === 'red'"  />
      <Light color="yellow" :isActive="activeColor === 'yellow'" />
      <Light color="green"  :isActive="activeColor === 'green'"/> -->
    </TrafficLight>
  </div>
</template>

<script lang="ts" setup>
import TrafficLight from "../components/TrafficLight.vue"
import Light from "../components/Light.vue"
import LightButton from "../components/LightButton.vue"
import { ref, provide, InjectionKey } from 'vue'
import { Color, ToggleModal } from "@/types";

const colors: Color[] = ['red', 'yellow', 'green']

const activeColor = ref('green')
const showModal = ref(false)
const toggleModal = () => { showModal.value = !showModal.value }
const changeActiveLight = (oldActiveColor: Color, newActiveColor: Color) => oldActiveColor === newActiveColor ? activeColor : activeColor.value = newActiveColor


provide('changeActiveLight', changeActiveLight)
provide('activeColor', activeColor)
provide('showModal', showModal)

const ToggleModalKey: InjectionKey<ToggleModal> = Symbol()
provide('toggleModal', toggleModal)

</script>