<template>
    <div> 
        <div class="title">
            <h3>Enjoy for free</h3>
        </div>

        <div class="signup-content" role="banner">  
        <b-card class="outCard">
                <ul>
                    <h5><b-icon icon="people"></b-icon> Free acount</h5>
                    <p>No need to Create acount</p>
                </ul>
                <ul>
                    <h5><b-icon icon="collection-play"></b-icon> Full Video library</h5>
                    <p>Enjoy from an unlimited collection of videos</p>
                </ul>
                <ul>
                    <h5><b-icon icon="heart"></b-icon> Leave a rating</h5>
                    <p>Rate and comment on your favorite videos</p>
                </ul>

            <!-- This is the card that store the movie in about page -->
            <b-card class="formCard"> 
            <b-form>
                <b-embed
                type="iframe"
                aspect="16by9"
                src="https://vod-progressive.akamaized.net/exp=1596823735~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3601%2F16%2F418007208%2F1802625052.mp4~hmac=59d901b97122e2c9c855899ce38beb84b4b2038719726e00e14f6504656e2735/vimeo-prod-skyfire-std-us/01/3601/16/418007208/1802625052.mp4?filename=production+ID%3A4391550.mp4"
                allowfullscreen
                ></b-embed>
            </b-form>
            </b-card>

        </b-card> 


     </div> 
    </div> 
</template>

<script>

export default {
    data(){
        return{

        }
    },
    methods:{
    }
    
}
</script>



<style scoped>
.title{
    position: relative;
    margin: auto;
    text-align: center;
    font-family:'Courier New', Courier, monospace;
    width: 35%;
    margin-top:4% ;
}
.outCard{
    position:absolute;
    margin: auto;
    text-align: left;
    width: 50%;
    background-color: #edf6f9;
    right: 25%;
}

p{
    width: 40%;
}

h5{
    color: #17a2b8;
}

.signup-content{
    padding: 20px;
    margin-right: 10px;

}



@media screen and (min-width: 1548px){
     .formCard{
        position:fixed;
        margin: auto;
        width: 30%;
        top: 25%;
        right:24%;
    }
}


</style>