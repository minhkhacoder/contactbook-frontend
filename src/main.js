import { createApp } from 'vue'
import App from './App.vue'
import { handle } from './common/promise'
import '@fortawesome/fontawesome-free'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

const app = createApp(App);
    app.mixin({
        methods: {
            handle,
        }
    });

app.use(router);
app.mount('#app');




