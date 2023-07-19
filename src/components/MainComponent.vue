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
            getVote(){
                
            }
        },
        computed: {
            displayStars() {
                return (voteAverage) => {
                    const maxStars = 5;
                    const numberOfStars = Math.round(voteAverage / 2);
                    const fullStars = '<i class="fa fa-star"></i>'.repeat(numberOfStars);
                    
                    let remainingStars = '';
                    for (let i = numberOfStars + 1; i <= maxStars; i++) {
                        remainingStars += '<i class="fa-regular fa-star"></i>';
                    }

                    return fullStars + remainingStars;
                };
            },
        },
    }
</script>

<template>
    <main>
        <div class="row">
            <div class="col-2 p-3 bg-warning m-2" 
                v-for="movie in store.movies">
                <div>
                    <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                </div>
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
                        Lingua: <img class="flag" :src="`src/img/flags/flag-${movie.original_language}.jpg`" alt="">
                    </h3>
                </div>
                <div>
                    <h4>
                        <span v-html="displayStars(movie.vote_average)"></span>
                    </h4>
                </div>
            </div>

            <div class="col-2 p-3 bg-primary m-2" 
                    v-for="serie in store.series">
                <div>
                    <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" alt="">
                </div>
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
                        Lingua: <img class="flag" :src="`src/img/flags/flag-${serie.original_language}.jpg`" alt="">
                    </h3>
                </div>
                <div>
                    <h4>
                        <span v-html="displayStars(serie.vote_average)"></span>
                    </h4>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

img {
    width: 100%;
}
.flag {
    width: 20px;
}

.active {
    display: block;
}

.hidden {
    display: none;
}

</style>