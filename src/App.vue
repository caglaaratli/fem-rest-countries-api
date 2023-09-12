<template>
    <div :class="theme">
       <MainHeader /> 
       <router-view />
    </div>
   
</template>

<script setup>
import { onMounted, provide, ref } from 'vue';
import MainHeader from '@/components/MainHeader.vue';
import Lookie from 'lookie';

const theme=ref(Lookie.get('theme') || 'dark')
const countries=ref([''])

onMounted(() =>{
    fetch( 'https://restcountries.com/v3.1/all')
       .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
        return response.json();
        })
        .then((data) => {
            countries.value = data.sort((firstCountryName , secondCountryName) => 
            firstCountryName.name.common.localeCompare(secondCountryName.name.common));
        })
        .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
     });
})

console.log(countries);
provide('theme',theme)
provide('countries',countries);

</script>



<style scoped>
.dark{
    background:#202c37;
    height:100vh;
}
</style> 