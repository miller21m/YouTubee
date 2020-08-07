<template>
    <div> 
        <b-col>
                    <b-container class="borders" style="height: 800px; overflow-y: scroll; ">
                        <b-col align-self="end">
                        <ul v-for="(item) in this.$store.getters.lisOfSongsToSend" :key="item">
                        <app-video :item="item"/>
                        </ul>
                        </b-col>
                    </b-container>  
        </b-col>
    </div>
</template>

<script>
//This is the list component to dispalt the 5 first result in the 'Search' page
import Video from './Video.vue';
export default {
    components:{
        appVideo: Video
    },
    data(){
        return{
            videoList: []
        }
    },
    created(){
        // this.videoList = this.$store.state.listOfSongs
        // console.log(this.videoList);
    }
}
</script>


<style scoped>

</style>