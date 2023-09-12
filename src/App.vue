<!-- <script setup>
import { ref } from 'vue'
import { onMounted, provide } from 'vue'
import Lookie from 'lookie'

import HeaderComponent from './components/MainHeader.vue'
import Icon from './components/Icon.vue'
import CountryBoard from "@/components/CountryBoard.vue"

const countries = ref([])
const theme = ref(Lookie.get('theme') || 'dark')
const isLoading = ref(true)

onMounted(() => {
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            countries.value = data.sort((firstCountry, secondCountry) =>
                firstCountry.name.common.localeCompare(secondCountry.name.common)
            )

            isLoading.value = false
        })
})

provide('countries', countries)
provide('theme', theme)
</script>

<template>
    <div :class="theme">
        <HeaderComponent />
        <router-view />
        <div v-if="isLoading" class="flex justify-center">
            <span class="text-center text-xl font-semibold dark:text-white"> Loading... </span>
            <Icon name="loading" :size="17" class="m-[5px] ml-3 dark:text-white" />
        </div>
    </div>
</template>

<style scoped>
.dark {
    height: 100vh;
    background: #202c37;
}
</style> -->

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

<template>
    <div :class="theme">
       <MainHeader /> 
       <router-view />
    </div>
   
</template>

<style scoped>
.dark{
    background:#202c37;
    height:100vh;
}
</style> 