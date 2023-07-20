<script>
    import { store } from '../store.js';
    import MovieCardComponent from './MovieCardComponent.vue';
    import SerieCardComponent from './SerieCardComponent.vue';
    import TopMovieComponent from './TopMovieComponent.vue';
    
    export default {
        name: "MainComponent",
        data() {
            return {
                store,
            }
        },
        components:{
            MovieCardComponent,
            SerieCardComponent,
            TopMovieComponent
        },
        methods: {
            scroll(container,direction) {
                const scrollAmount = 380;
                if (direction === "left") {
                    this.$refs[container].scrollBy(-scrollAmount, 0);
                } else if (direction === "right") {
                    this.$refs[container].scrollBy(scrollAmount, 0);
                }
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
            topMovies() {
                return this.store.topMovies;
            },
        },
    }
</script>

<template>
    <main>
        <div class="row justify-content-center">

            <div class="non-scroll-container pt-5 pb-5" v-if="(store.searchPerformed == true & store.movies.length > 0)">
                <h1>MOVIES</h1>
                <div class="scroll-container" ref="scrollContainerMovies">
                    <div class="col-3" 
                        v-for="movie in store.movies.slice(0,6)">
                        <MovieCardComponent :movie="movie"/>
                    </div>
                </div>
                <button id="scrollButtonleft" @click="scroll('scrollContainerMovies','left')"><h1> &lt; </h1></button>
                <button id="scrollButtonright" @click="scroll('scrollContainerMovies','right')"> <h1>  > </h1></button>
            </div>

            <div class="non-scroll-container pt-5 pb-5" v-if="(store.searchPerformed == true & store.series.length > 0)">
                <h1>SERIES</h1>
                <div class="scroll-container" ref="scrollContainerSeries">
                    <div class="col-3" 
                        v-for="serie in store.series.slice(0,6)">
                        <SerieCardComponent :serie="serie" />
                    </div>
                </div>
                <button id="scrollButtonleft" @click="scroll('scrollContainerSeries','left')"><h1> &lt; </h1></button>
                <button id="scrollButtonright" @click="scroll('scrollContainerSeries','right')"> <h1>  > </h1></button>
            </div>

            <div class="non-scroll-container">
                <h1>TOP RATED MOVIES</h1>
                <div class="scroll-container" ref="scrollContainerTopMovies">
                    <div class="col-3" v-for="topmovie in topMovies.slice(0, 9)">
                        <TopMovieComponent  :topmovie="topmovie"/>
                    </div>
                    <button id="scrollButtonleft" @click="scroll('scrollContainerTopMovies','left')"><h1> &lt; </h1></button>
                    <button id="scrollButtonright" @click="scroll('scrollContainerTopMovies','right')"> <h1>  > </h1></button>
                </div>
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use "../assets/scss/partials/variables.scss" as *;
</style>