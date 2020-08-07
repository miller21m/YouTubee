<template>
    <div class="container">
        <app-SearchBar></app-SearchBar> 
        <b-row>
            <b-col cols="7">
                <app-play-video></app-play-video>
            </b-col>
            <b-col cols="5">
                 <app-list-of-videos></app-list-of-videos>
            </b-col>
        </b-row>

    </div>
</template>


<script>
import SearchBar from '../dashboard/SearchBar.vue';
import ListOfVideos from './ListOfVideos.vue';
import PlayVideo from './PlayVideo.vue';
export default {
    components:{
        appSearchBar: SearchBar,
        appListOfVideos: ListOfVideos,
        appPlayVideo: PlayVideo
    },
    data(){
        return{ 
            listOfVideos:[],
        }
    },
    created(){
        this.$store.dispatch('fetchData');//Dispatch the fetchData function (action) in order to featch data for the first time from youTube API
    },
    computed:{
        numOfVideos(){
           return this.$store.getters.lisOfSongsToSend.length//This used to check if we are getting a result  from the store
        }
    }
    
}
</script>


<style scoped>

</style>

