import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import EntryPage from "../pages/EntryPage.vue";
import AddEditEntryPage from "../pages/AddEditEntryPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/entry/new", name: "AddEntry", component: AddEditEntryPage },
  { path: "/entry/:id", name: "EditEntry", component: EntryPage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
