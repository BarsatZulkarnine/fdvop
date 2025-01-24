<template>
    <div class="border p-4 rounded bg-white shadow">
      <h3 class="text-lg font-bold">{{ entry.title }}</h3>
      <p class="text-gray-600 text-sm">{{ entry.date }}</p>
      <p class="mt-2 text-gray-800">{{ entry.content.slice(0, 100) }}...</p>
      <router-link
        :to="`/entry/${entry.id}`"
        class="text-blue-600 hover:underline mt-2 inline-block"
      >
        Read More
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      entry: Object,
    },
  };
  </script>
  