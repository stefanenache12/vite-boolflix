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
        <div class="mycontainer">
            <div  class="logo">
                <h1>
                    BOOFLIX
                </h1>
            </div>
            <div class="search-bar">
                <form action="" @submit.prevent="$emit('search')">
                    <input class="search-bar" v-model="store.searchText" type="text" placeholder="Search movie by name...">
                    <button type="submit">SEARCH</button>
                </form>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    
    header{
        background-color: black;
    }
    .mycontainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 80px;
        margin-right: 80px;
        

        h1 {
        color: 	#db0000;
        font-size: 4rem;
        }
        
        button {
            padding: 2px;
            border: none;
        }
        
        .search-bar {
            padding: 2px;
            border: none;
        }
        
    }
    
</style>