import VueDevtools from 'nativescript-vue-devtools'
import Vue from "nativescript-vue";

// @ts-ignore
import Home from "./components/Home.vue";

// @ts-ignore
if(TNS_ENV !== 'production') {
	Vue.use(VueDevtools)
}

// @ts-ignore
Vue.config.silent = TNS_ENV === 'production';

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
