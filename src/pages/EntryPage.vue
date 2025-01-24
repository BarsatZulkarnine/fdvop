<template>
    <div>
      <h2 class="text-xl font-bold mb-2">{{ entry.title }}</h2>
      <p class="text-gray-600 mb-4">{{ entry.date }}</p>
      <p class="mb-4">{{ entry.content }}</p>
      <div class="flex gap-2">
        <router-link
          :to="`/entry/${entry.id}`"
          class="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Edit
        </router-link>
        <button @click="deleteEntry" class="bg-red-600 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useRoute, useRouter } from "vue-router";
  import { useJournalStore } from "../store/journalStore";
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const store = useJournalStore();
  
      const entry = store.getEntryById(route.params.id);
  
      const deleteEntry = () => {
        store.deleteEntry(entry.id);
        router.push("/");
      };
  
      return { entry, deleteEntry };
    },
  };
  </script>
  