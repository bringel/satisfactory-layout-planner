<template>
  <nav class="px-4 py-4 bg-gray-800 h-16 flex-none">
    <h1 class="text-2xl text-white font-bold">Satisfactory Layout Planner</h1>
  </nav>
  <div class="grid grid-cols-[3fr_1fr] grow justify-stretch items-stretch">
    <svg width="100%" height="100%" ref="svg">
      <GridBackground :grid-size="128" :sub-grid-lines="4" grid-style="line" />
    </svg>
    <BuildablePalette @click="handleBuildableClick" />
  </div>
</template>
<script setup lang="ts">
import { useTemplateRef } from 'vue';
import GridBackground from './components/GridBackground.vue';
import BuildablePalette from './components/BuildablePalette.vue';
import { useLayoutStore, BuildableType } from './stores/layoutStore';

const svgRef = useTemplateRef<SVGElement>('svg');

const store = useLayoutStore();

function handleBuildableClick(type: keyof typeof BuildableType) {
  let x = 0;
  let y = 0;
  if (svgRef.value) {
    const width = svgRef.value.clientWidth;
    const height = svgRef.value.clientHeight;

    x = width / 2;
    y = height / 2;
  }

  store.addBuildable(type, x, y);
}
</script>
