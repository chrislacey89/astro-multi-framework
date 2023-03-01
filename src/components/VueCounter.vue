

<script lang="ts">
import { useStore } from '@nanostores/vue'
import { count, addOne, subtractOne } from '../countStore';

  const currentCount = useStore(count);
export default {
  setup() {



    return {
        currentCount,
        addOne,
        subtractOne
    };
  },
};
</script>

<template>
    <!--
          Seeing type errors on the word `class`?
          This unfortunately happens because @types/react's JSX definitions leak into every file due to being declared globally.
          There's currently no way to prevent this when using both Vue and React with TypeScript in the same project.
          You can read more about this issue here: https://github.com/johnsoncodehk/volar/discussions/592
      -->
    <div class="counter">
      <button class="btn" @click="subtractOne">-</button>
      <pre>{{ currentCount }}</pre>
      <button class="btn" @click="addOne">+</button>
    </div>
    <div class="counter-message">
      <slot />
    </div>
  </template>