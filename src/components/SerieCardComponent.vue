<script>
    export default {

        name: "SerieCard",

        data() {
            return {
                
            }
        },
        props: {
                serie: {
                    type: Object,
                        default: () => ({
                            poster_path: '',
                            name: '',
                            original_name: '',
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
                    <img v-if="(serie.poster_path != null)" :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" alt="Avatar" style="width:100%;">
                    <img v-else src="src/img/booflixlogo.png" alt="" style="width: 100%;">
                </div>
            <div class="flip-card-back">
                <h1>{{serie.name}}</h1> 
                <p>Titolo Originale: {{serie.original_name}}</p> 
                <p class="flag">Language: <img  :src="getFlag(serie.original_language)" :alt="serie.original_language"></p>
                <p>{{ serie.overview}}</p>
                <h4>
                    <span style="color: #ffd700;" v-html="displayStars(serie.vote_average)"></span>
                </h4>
                <a :href="`https://www.youtube.com/results?search_query=trailer${serie.original_name}`" target="_blank">
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