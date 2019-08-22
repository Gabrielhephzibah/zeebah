<template>
  <div class="container-fluid">
  	<sidebar/>
    
  </div>
</template>

 <script>
 // @ is an alias to /src
 import sidebar from '@/components/sidebar.vue';

 export default {
   name: 'home',
   components: {
   	sidebar
    
   }
 };
 </script>

 <style>
 	.container-fluid{
 		margin-left: -15px;

 	}
 </style>
