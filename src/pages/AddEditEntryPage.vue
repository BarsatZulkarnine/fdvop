<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">{{ isEditing ? "Edit Entry" : "Add New Entry" }}</h2>
      <form @submit.prevent="saveEntry">
        <input
          v-model="entry.title"
          type="text"
          placeholder="Title"
          class="w-full border p-2 mb-4"
          required
        />
        <textarea
          v-model="entry.content"
          placeholder="Content"
          class="w-full border p-2 mb-4"
          rows="5"
          required
        ></textarea>
        <select v-model="entry.mood" class="w-full border p-2 mb-4">
          <option disabled value="">Select Mood</option>
          <option value="😊">Happy</option>
          <option value="😔">Sad</option>
          <option value="😐">Neutral</option>
        </select>
        <input
          v-model="entry.tags"
          type="text"
          placeholder="Tags (comma separated)"
          class="w-full border p-2 mb-4"
        />
  
        <div class="flex gap-2">
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>
          <router-link to="/" class="bg-gray-600 text-white px-4 py-2 rounded">
            Cancel
          </router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { useJournalStore } from "../store/journalStore";
  import { useRoute, useRouter } from "vue-router";
  
  export default {
    setup() {
      const store = useJournalStore();
      const router = useRouter();
      const route = useRoute();
  
      const isEditing = !!route.params.id;
      const entry = isEditing
        ? { ...store.getEntryById(route.params.id) }
        : { title: "", content: "", mood: "", tags: "" };
  
      const saveEntry = () => {
        if (isEditing) {
          store.updateEntry(route.params.id, entry);
        } else {
          store.addEntry({ ...entry, date: new Date().toISOString() });
        }
        router.push("/");
      };
  
      return { entry, isEditing, saveEntry };
    },
  };
  </script>
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>