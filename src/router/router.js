import { createWebHistory, createRouter } from "vue-router"
import PostView from "@/views/PostView.vue"
import Signup from "@/views/Signup.vue"

const routes = [
  {
    path: "/",
    name: "PostView",
    component: PostView,
  },
{
    path: "/signup",
    name: "Signup",
    component: Signup,

}
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router

