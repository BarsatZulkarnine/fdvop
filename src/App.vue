<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <header class="bg-blue-600 text-white py-4 px-6">
      <h1 class="text-2xl font-bold">Daily Journal</h1>
    </header>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Add any global styles if needed */
</style>
