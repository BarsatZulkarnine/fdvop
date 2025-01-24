<template>
    <div class="entry-container">
      <h3 class="entry-title">{{ entry.title }}</h3>
      <p class="entry-date">{{ entry.date }}</p>
      <p class="entry-content">{{ entry.content.slice(0, 100) }}...</p>
      <router-link
        :to="`/entry/${entry.id}`"
        class="read-more-link"
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
  
  <style scoped>
  .entry-container {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  
  .entry-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .entry-date {
    color: #888;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
  
  .entry-content {
    color: #333;
    margin-bottom: 1rem;
  }
  
  .read-more-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .read-more-link:hover {
    text-decoration: underline;
  }
  </style>