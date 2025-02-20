
<script setup>
  import { ref} from 'vue' ;

  defineProps({
  message: String 
});


</script>





<style>

.displayMovies {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: black;
  height: 400px;
  width: 60vw;
}
</style>


<template>
<div class="displayMovies"> 
  
  <div>
    
    <router-link to="/">
      <button >Close the movie box, im ready to check the forecast!</button>
    </router-link>
    {{ message }}
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/y7nuxXCX97o?si=vZqVQNTfWrvCsLUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
  </div>
      

</div>
</template>
