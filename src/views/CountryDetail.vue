
<template>
    <div class="dark:bg-darker-blue dark:text-white">
        <button
            :class="[
                'mx-16 mt-[80px] flex w-[120px]  rounded bg-white p-3',
                'shadow  dark:bg-dark-blue dark:text-white',
            ]"
            @click="returnMainPage"
        >
            <Icon name="arrow" :size="20" class="mt-[2px]" />
            <span class="pl-6">Back</span>
        </button>

        <div class="  flex flex-wrap justify-evenly p-4
                      dark:text-white ">
        <img :src="countryDetails.flags.png" alt="" class="max-h-72 w-[340px] drop-shadow-md p-2 rounded  sm:w-[450px]" />
        <div c>
            <h2 class="text-center text-2xl font-bold pt-5">
                {{ capitalizeFirstLetter(countryName)}}
            </h2>
            <div>
            <p v-for="(value, key) in countryDetail" :key="key" class="pt-2 text-center ">
                <span class="font-semibold">{{ capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1').trim()) }}:</span>
                <span class="font-light">{{ value }}</span>
            </p>
        </div>
            <p v-if="borders" class="pt-5 flex flex-wrap" >
                <span class="pt-1 font-semibold">Border Countries:</span>
                <span
                    v-for="(border, key) in borders"
                    :key="key"
                    class="p-2 shadow text-xs m-1 dark:bg-dark-blue dark:text-white"
                >
                    {{ border }}
                </span>
            </p>
        </div>
    </div>
    </div>
    
</template>


<script setup>
import {inject} from 'vue';
import router from '@/router'
import Icon from '@/components/Icon.vue'

const countries=inject('countries')

const countryName = router.currentRoute.value.params.countryName
const countryDetails=countries._rawValue.filter((country) => country.name.common.toLowerCase() === countryName)[0]
const borders=countryDetails?.borders

const countryDetail = {
     nativeName : countryDetails?.altSpellings[1],
     population : countryDetails?.population ,
     region :countryDetails?.region,
     subRegion: countryDetails?.subregion,
     capital:countryDetails?.capital?.[0],
     topLevelDomain:countryDetails?.tld?.[0],
     currencies :Object.values(countryDetails?.currencies)[0].name,
     languages : Object.values(countryDetails?.languages).join(',')
}

const returnMainPage = () => {
    router.push({ path: `/` })
}

const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1); 
}
</script>
