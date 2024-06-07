import dataBinding from './dataBinding.js';
import fors from './for.js';
import ifs from './if.js';
import events from './event.js';
import posts from './post.js';
import todos from './todo.js';

const { createWebHistory, createRouter } = VueRouter;
const routes = [
    {path: "/databinding", component: dataBinding},
    {path: "/fors", component: fors},
    {path: "/ifs", component: ifs}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;