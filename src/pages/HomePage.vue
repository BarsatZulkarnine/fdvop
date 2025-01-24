<template>
  <div class="home-container">
    <h2 class="title">My Journal Entries Testing</h2>
    <router-link
      to="/entry/new"
      class="add-entry-button"
    >
      Add New Entry
    </router-link>

    <div v-if="entries.length > 0" class="entries-grid">
      <JournalEntry
        v-for="entry in entries"
        :key="entry.id"
        :entry="entry"
      />
    </div>
    <p v-else class="no-entries-message">No journal entries yet.</p>
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

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.add-entry-button {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: 1rem;
}

.add-entry-button:hover {
  background-color: #0056b3;
}

.entries-grid {
  display: grid;
  gap: 1rem;
}

.no-entries-message {
  color: #888;
}
</style>