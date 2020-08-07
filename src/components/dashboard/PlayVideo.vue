<template>
<div>
    <b-card   border-variant="info">
    <b-embed 
    type="iframe"
    aspect="16by9"
    :src="this.$store.getters.getVideoUrl"
    allowfullscreen>
    </b-embed>
    </b-card>

    <br>

    <template>
        <b-icon class="h4 mb-2" icon="hand-thumbs-up" rotate="-45" @click="liked"></b-icon>
        <b-icon class="h4 mb-2" icon="hand-thumbs-down" rotate="-45" @click="disliked"></b-icon>
        <b-icon class="h4 mb-2" icon="emoji-laughing" v-if="like"></b-icon>
        <b-icon class="h4 mb-2" icon="emoji-frown" v-if="dislike"></b-icon>
    </template>

    <br>
    <h3>{{this.$store.getters.getVideoTitle}}</h3>
    <br>
    <b-card border-variant="info"
        header="About the video"
        header-bg-variant="info"
        header-text-variant="white"
        >
        <b-card-text>
            {{this.$store.getters.getVideoDisc}}
        </b-card-text>
    </b-card>
</div>
</template>



<script>
export default {
    data(){
        return{
            value:0,
            like:false,
            dislike:false
        }
    },
    methods:{
        liked(){
            this.like = true;
            this.dislike=false;
        },
        disliked(){
            this.dislike = true;
            this.like=false;
        }

    }
    
}
</script>



<style scoped>
h3{
    text-align: center;
}

.b-icon{
    
}

</style>