<script>
import { store } from '../store.js';

    export default {

        name: "HeaderComponent",

        data() {
            return {
                store
            }
        },

        methods: {}
    }
</script>

<template>
    <header>
        <form action="" @submit.prevent="$emit('search')">
            <input v-model="store.searchText" type="text" placeholder="Search movie by name...">
            <button type="submit">Cerca</button>
        </form>
    </header>
</template>

<style lang="scss" scoped>

</style>