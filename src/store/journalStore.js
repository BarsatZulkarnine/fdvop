import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useJournalStore = defineStore("journalStore", {
  state: () => ({
    entries: [], // Array of journal entries
  }),
  actions: {
    addEntry(entry) {
      this.entries.push({ ...entry, id: uuidv4() });
    },
    updateEntry(id, updatedEntry) {
      const index = this.entries.findIndex((entry) => entry.id === id);
      if (index !== -1) {
        this.entries[index] = { ...updatedEntry, id };
      }
    },
    deleteEntry(id) {
      this.entries = this.entries.filter((entry) => entry.id !== id);
    },
  },
  getters: {
    getEntryById: (state) => (id) => {
      return state.entries.find((entry) => entry.id === id);
    },
  },
});
