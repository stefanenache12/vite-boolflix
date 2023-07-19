<script>
    import HeaderComponent from "./components/HeaderComponent.vue";
    import MainComponent from "./components/MainComponent.vue";
    import axios from "axios";
    import { store } from './store.js';

    export default {

        name: "App",
            components: {
                HeaderComponent,
                MainComponent,
            },
        data() {
            return {
                store,
            };
        },
        methods: {},
    };
</script>

<template>
    <HeaderComponent class="container w-50 p-5" />

    <MainComponent />
</template>

<style lang="scss">
    @use "assets/scss/main";
</style>
