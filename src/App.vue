<template>
  <nav class="px-4 py-4 bg-gray-800 h-16 flex-none">
    <h1 class="text-2xl text-white font-bold">Satisfactory Layout Planner</h1>
  </nav>
  <div class="grid grid-cols-[3fr_1fr] grow justify-stretch items-stretch">
    <svg width="100%" height="100%">
      <pattern id="grid-pattern" patternUnits="userSpaceOnUse" x="0" y="0" :width="gridSize" :height="gridSize">
        <line
          v-for="i in subGridLines - 1"
          :key="i"
          x1="0"
          :x2="gridSize"
          :y1="i * subGridSize"
          :y2="i * subGridSize"
          class="stroke-gray-200"
        ></line>
        <line
          v-for="i in subGridLines"
          :key="i"
          :x1="i * subGridSize"
          :x2="i * subGridSize"
          y1="0"
          :y2="gridSize"
          class="stroke-gray-200"
        ></line>
        <line x1="0" y1="0" x2="144" y2="0" opacity="1" class="stroke-gray-500"></line>
        <line x1="0" y1="0" x2="0" y2="144" opacity="1" class="stroke-gray-500"></line>
      </pattern>

      <rect fill="url(#grid-pattern)" width="100%" height="100%"></rect>
    </svg>
    <div class="border-l border-gray-700"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';

const gridSize = ref(128);
const subGridLines = ref(4);
const subGridSize = computed(() => gridSize.value / subGridLines.value);
</script>
