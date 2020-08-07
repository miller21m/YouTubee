<template>
<div class="mt-4 welcome">

        <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
            <template v-slot:header>YouTubee</template>
            <template v-slot:lead>
                You found the best place to watch free videos - and now you're just one search away from it!
            </template>

        </b-jumbotron>
    
        <b-card 
        img-src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        img-alt="Card image"
        img-left class="mb-3 cardImg">

        <b-card-text>
            <h1><b-icon icon="people"></b-icon> Free acount</h1>
                    <h4>Free use without acount</h4>
        </b-card-text>
        </b-card>

        <b-card 
        img-src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        img-alt="Card image"
        class="mb-3 cardImg" img-right>

        <b-card-text>
            <h1><b-icon icon="collection-play"></b-icon> Full Video library</h1>
                    <h4>Enjoy from an unlimited collection of videos</h4>
        </b-card-text>
        </b-card>

        <b-card 
        img-src="https://images.pexels.com/photos/4471314/pexels-photo-4471314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        img-alt="Card image"
        img-left class="mb-3 cardImg">

        <b-card-text>
            <h1><b-icon icon="heart"></b-icon> Leave a rating</h1>
                    <h4>Rate and comment on your favorite videos</h4>
            
        </b-card-text>
        </b-card>
    </div>
</template>


<script>
export default {
    
}
</script>



<style >
.welcome{
    width: 80%;
    margin: auto;
}

.cardImg{
    background-color: #17a2b8;
    height: 33%;
}

.card-text{
    color:#edf1f1;
}

.open {
    width: 473px;
    margin: 0 auto;
    overflow: hidden;
    display: inline-flex;
    animation-name: open;
}

.title{

    text-align: center;
    font-size:30px;
    font-family: 'Roboto Mono', monospace;

}


.button{
    background-color: white;
}

b-jumbotron{
    align-content: center;
}

</style>