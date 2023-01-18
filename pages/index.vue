<template>
  <button @click="navigate">Navigate to user</button>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from '@typed-router';

const router = useRouter();

function navigate() {
  router.push({ name: 'user-id', params: { id: 1 } });
}
</script>
