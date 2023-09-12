<template>
    <div class=" w-[260px] max-h-96  rounded-md cursor-pointer shadow-lg
                dark:bg-dark-blue dark:text-white border-solid-[2px]"
                @click="showCountryDetail"    >
        <img
            :src="country.flags.png"
            :alt="country.name.common"
            class="  h-[150px]  w-full rounded-t-lg "
        />
        <div class="p-4 text-center">
            <h1 class="text-lg font-bold mt-[6px]">{{ country.name.common}}</h1>
            <div class="text-center text-sm font-semibold py-5" > 
                <p>Population : <span class="font-normal">{{  country.population }}</span></p>
                <p>Region : <span class="font-normal">{{ country.region }}</span></p>
                <p v-if="country.capital !== undefined" >Capital : <span class="font-normal">{{ country.capital[0] }}</span> </p>
            </div>
           
        </div>
    </div>
        
</template>

<script setup>
import router from '../router'
const props =defineProps({
    country:{
        type: Object  ,
        required : true,
    }
}) 

const showCountryDetail = () =>{
    const pathCountry = props.country.name.common.toLowerCase()
    router.push({ path: `/${pathCountry}` })
}
</script>