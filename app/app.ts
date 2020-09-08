import Vue from "nativescript-vue";

// @ts-ignore
import Home from "./components/Home.vue";

Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
