<template>
  <nav class="px-4 py-4 bg-gray-800 h-16 flex-none">
    <h1 class="text-2xl text-white font-bold">Satisfactory Layout Planner</h1>
  </nav>
  <div class="grid grid-cols-[3fr_1fr] grow justify-stretch items-stretch">
    <svg width="100%" height="100%">
      <GridBackground :grid-size="128" :sub-grid-lines="4" grid-style="line" />
    </svg>
    <div class="border-l border-gray-700"></div>
  </div>
</template>
<script setup lang="ts">
import GridBackground from './components/GridBackground.vue';
</script>
