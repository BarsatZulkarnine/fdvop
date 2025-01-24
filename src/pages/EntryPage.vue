<template>
  <div class="entry-container">
    <h2 class="entry-title">{{ entry.title }}</h2>
    <p class="entry-date">{{ entry.date }}</p>
    <p class="entry-content">{{ entry.content }}</p>
    <div class="entry-actions">
      <router-link
        :to="`/entry/${entry.id}`"
        class="edit-button"
      >
        Edit
      </router-link>
      <button @click="deleteEntry" class="delete-button">
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

<style scoped>
.entry-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.entry-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.entry-date {
  color: #888;
  margin-bottom: 1rem;
}

.entry-content {
  margin-bottom: 1rem;
}

.entry-actions {
  display: flex;
  gap: 0.5rem;
}

.edit-button,
.delete-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}

.edit-button {
  background-color: #007bff;
}

.edit-button:hover {
  background-color: #0056b3;
}

.delete-button {
  background-color: #dc3545;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>