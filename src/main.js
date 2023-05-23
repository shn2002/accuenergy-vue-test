import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App)
app.use(store);
app.mount('#app');
