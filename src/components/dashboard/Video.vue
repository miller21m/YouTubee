
<template>
    <div class="video">
            <b-img :src="item.snippet.thumbnails.medium.url" 
            @click="selctedVideo(item)"/>
            <hr>
    </div>
</template>

<script>
// This is a singel video in a video list 
export default {
    props:['item'],
    data(){
        return{
           
        }
    },
    methods:{
        selctedVideo(data){
            console.log(data);
            this.$store.dispatch('selectedVideoId', data)//Send the video id 
        }
    }

    
}
</script>


<style scoped>


</style>