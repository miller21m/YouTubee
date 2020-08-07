<template>
    <div class="searchBar">
    <b-form>
        <b-row>
            <b-col cols="11">
                <b-form-group>
                <b-form-input
                v-model="search"
                placeholder="Search"
                type="text"
                ></b-form-input>
                </b-form-group>
            </b-col>

            <b-col cols="1">
                <b-button @click="submit"><b-icon icon="search" /></b-button>
            </b-col>
        </b-row>
    </b-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            search:''
        }
    },
    methods:{
        submit(){
            //term = this.searchTerm
            console.log(this.searchTerm);
            this.$store.dispatch('searchTerm', this.search)
        }
    }
}
</script>


<style scoped>
.searchBar{
    margin-top: 10px;
}
</style>

