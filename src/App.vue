<template>
  <div id="app">
     <navbar/>
  
   <!-- <Todos/>
     -->
    <router-view/>
  </div>
</template>


<script>
// @ is an alias to /src
 import navbar from '@/components/navbar.vue';
// import Todos from '@/components/Todos.vue';



export default {
  name: 'home',
  components: {
    
    navbar
  
    
  }
}
  



</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
