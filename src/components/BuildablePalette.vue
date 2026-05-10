<template>
  <div class="grid grid-cols-3 gap-2 auto-rows-min">
    <div
      v-for="buildable in buildables"
      :key="buildable.selector"
      class="p-2 flex flex-col items-center cursor-pointer"
    >
      <img :src="buildable.imagePath" />
      <div class="mt-1 font-bold">{{ buildable.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import buildables from '../buildables.json';
</script>
