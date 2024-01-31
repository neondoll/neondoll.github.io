import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./pages/Home.vue";
import InteractiveKeyboard from "./pages/InteractiveKeyboard.vue";

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/interactive-keyboard", name: "interactiveKeyboard", component: InteractiveKeyboard}
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;