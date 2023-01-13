<template>
  <button @click="navigate">Navigate to user</button>
</template>

<script setup>
import { useTypedRouter, useTypedRoute } from '@typed-router';

const router = useTypedRouter();

function navigate() {
  router.push({ name: 'user-id', params: { id: 1 } });
}
</script>
