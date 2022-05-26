import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router"
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import routes from '@/router'
import store from "@/pages/store";


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')