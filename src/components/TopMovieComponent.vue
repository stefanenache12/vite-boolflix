<script>
    export default {

        name: "TopMovieCard",

        data() {
            return {}
        },
        props: {
                topmovie: {
                    type: Object,
                        default: () => ({
                            poster_path: '',
                            title: '',
                            original_title: '',
                            original_language: '',
                            vote_average: ''
                        })           
                }
        },
        methods: {

            getFlag(lang){
                if(lang == 'en'){
                    return `src/img/flags/flag-en.jpg`
                }
                else if(lang == 'it'){
                    return `src/img/flags/flag-it.jpg`
                }
                else if(lang == 'es'){
                    return `src/img/flags/flag-es.jpg`
                }
                else if(lang == 'ge'){
                    return `src/img/flags/flag-ge.jpg`
                }
                else if(lang == 'fr'){
                    return `src/img/flags/flag-fr.jpg`
                }
                else{
                    return 'src/img/flags/flag-earth.jpg'
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
        },
    }
</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="`https://image.tmdb.org/t/p/w342/${topmovie.poster_path}`" alt="Avatar" style="width:100%;">
                </div>
            <div class="flip-card-back">
                <h1>{{topmovie.title}}</h1> 
                <p>Titolo Originale: {{topmovie.original_title}}</p> 
                <p class="flag">Language: <img  :src="getFlag(topmovie.original_language)" :alt="topmovie.original_language"></p>
                <p>{{ topmovie.overview}}</p>
                <h4>
                    <span style="color: #ffd700;" v-html="displayStars(topmovie.vote_average)"></span>
                </h4>
                <a :href="`https://www.youtube.com/results?search_query=trailer${topmovie.original_title}`" target="_blank">
                    <h4>
                        Trailer
                    </h4>           
                </a>
            </div>
        </div> 
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/flipcard.scss" as *;
.flag {
    img{
        width: 20px;
    }
}
</style>