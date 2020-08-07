<template>
  <div>
    <app-header/>
   <router-view></router-view>

    <div class="fixed-footer">
        <div>Copyright: <a href="https://www.linkedin.com/in/michael-miller-045129197">Michael Miller</a></div>        
    </div>
  </div>
</template>


<script>
import Header from './components/header/Header.vue'
export default {
  components:{
    appHeader : Header
  }
}
</script>



<style>
body{
  background-color: #caf0f8;
}

.fixed-footer{
      bottom: 0;
}

.fixed-footer{
        width: 100%;
        position: fixed;        
        background: rgba(27, 73, 101, 0.5);
        padding: 10px 0;
        color: #fff;
    }


</style>