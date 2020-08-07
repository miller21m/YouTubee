import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


import router from './router'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        listOfSongs: [],//Store 5 first results of the search 
        currentSong:null, // storing the current video
        videoIdToPlay:'q0hyYWKXF0Q'
    },
    mutations:{
        storeSongs(state, data){
            state.listOfSongs = data
            console.log(state.listOfSongs);
        },
        storeSelectedVideo(state,data){
            state.videoIdToPlay = data.id.videoId;
            state.currentSong = data
            console.log(state.currentSong);
            //console.log('seleted Video:' + state.videoIdToPlay);
        }

    },
    actions:{
        fetchData({commit,state}){ //When loding the 'Search' page this dispatch this function to get data from youtube api
            console.log("Start Fetch data");
            axios.get('/search',{
                            params:{
                                part:'snippet',
                                type:'video',
                                maxResults:5,
                                key: 'AIzaSyCyrAqda_fIHGu8explAHH0jdv3MQHd7_U',
                                q:'music'
                                }
            })
            .then(res => {
                            console.log(res.data.items)
                            const data = res.data.items
                            commit('storeSongs', data)

                         })
            .catch(error => console.log(error))
        },
        searchTerm({commit, state}, data){//This function dispatch when the user searching for term  
            axios.get('/search',{
                params:{
                    part:'snippet',
                    type:'video',
                    maxResults:5,
                    key: 'AIzaSyCyrAqda_fIHGu8explAHH0jdv3MQHd7_U',
                    q:data
                    }
                    })
                    .then(res => {
                    //console.log(res.data.items)
                    const data = res.data.items
                    commit('storeSongs', data) // And commiting the 'storeSongs' mutations to store the 5 results 
                    })
                    .catch(error => console.log(error))

        },
        selectedVideoId({commit, state}, data){//Store the result of the selected video
            commit('storeSelectedVideo', data)
        }

    },
    getters:{
        lisOfSongsToSend(state){
            return state.listOfSongs 
        },
        getVideoUrl(state){
            const videoUrl='https://www.youtube.com/embed/' + state.videoIdToPlay
            return videoUrl
        },
        getVideoTitle(state){
            return !state.currentSong? 'TONES AND I - DANCE MONKEY (OFFICIAL VIDEO)' : state.currentSong.snippet.title
        },
        getVideoDisc(state){
            return !state.currentSong? '2nd single from debut EP The Kids Are Coming out now. https://tonesandi.lnk.to/TheKidsAreComingYT Watch Tones And Is Artist On The Rise video: ...': state.currentSong.snippet.description
        }

    }
})