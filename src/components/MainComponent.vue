<script>
    import { store } from '../store.js';
    export default {
        name: "MainComponent",
        data() {
            return {
                store,
            }
        },
        methods: {

        }
    }
</script>

<template>
    <main>
        <div class="row">
            <div class="col-2 p-3 bg-warning m-2" 
                v-for="movie in store.movies">
                <div>
                    <h1>
                        <strong>Titolo:</strong>{{movie.title}}
                    </h1>
                </div>
                <div>
                    <h2>
                        Titolo Originale: {{movie.original_title}}
                    </h2>
                </div>
                <div>
                    <h3>
                        Lingua: <img :src="`src/img/flags/flag-${movie.original_language}.jpg`" alt="">
                    </h3>
                </div>
                <div>
                    <h4>
                        Voto: {{movie.vote_average}}
                    </h4>
                </div>
            </div>

            <div class="col-2 p-3 bg-primary m-2" 
                    v-for="serie in store.series">
                <div>
                    <h1>
                        <strong>Titolo:</strong>{{serie.name}}
                    </h1>
                </div>
                <div>
                    <h2>
                        Titolo Originale: {{serie.original_name}}
                    </h2>
                </div>
                <div>
                    <h3>
                        Lingua: <img :src="`src/img/flags/flag-${serie.original_language}.jpg`" alt="">
                    </h3>
                </div>
                <div>
                    <h4>
                        Voto: {{serie.vote_average}}
                    </h4>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

img {
    width: 20px;
}


</style>