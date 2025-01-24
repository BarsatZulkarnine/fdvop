<template>
    <div>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">My Journal Entries</h2>
        <router-link
          to="/entry/new"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New Entry
        </router-link>
      </div>
  
      <div v-if="entries.length > 0" class="grid gap-4">
        <JournalEntry
          v-for="entry in entries"
          :key="entry.id"
          :entry="entry"
        />
      </div>
      <p v-else class="text-gray-500">No journal entries yet.</p>
    </div>
  </template>
  
  <script>
  import { useJournalStore } from "../store/journalStore";
  import JournalEntry from "../components/JournalEntry.vue";
  
  export default {
    components: { JournalEntry },
    setup() {
      const store = useJournalStore();
      return {
        entries: store.entries,
      };
    },
  };
  </script>
  