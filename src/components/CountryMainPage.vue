<template>
  <div>
    <section class="dark:bg-darker 
           container mx-auto px-4 my-10 flex flex-col :flex-wrap md:items-center md:flex-row space-y-4"> 
        <SearchCountry v-model:searchCountry="searchedCountry" @searchClear="searchClear"/>
        <DropdownFilter @changedFilter="regionUpdate"  />
    </section>
    <section class="flex flex-wrap justify-center gap-14 px-16 dark:bg-darker-blue">
        <CountryCards  v-for="country in filterCountryList"  :key="country.name.common"  :country="country" />
    </section>

  </div>
    
</template>

<script setup>

import SearchCountry from './SearchCountry.vue'
import DropdownFilter from './DropdownFilter.vue';
import CountryCards from './CountryCards.vue'
import {ref} from 'vue';
import {computed } from 'vue';

const searchedCountry = ref('');
const selectedRegion=ref('All')

const searchFilterList = computed(() => {
  if (searchedCountry.value !== '') {
    return props.countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchedCountry.value.toLowerCase())
    );
  } else {
    return props.countries; 
  }
});

const regionFilterList = computed(() => {
  if (selectedRegion.value === 'All') {
    return props.countries; 
  }
  return props.countries.filter((selectedCountry) => selectedCountry.region === selectedRegion.value);
});

const filterCountryList = computed(() => {
  if (searchedCountry.value !== '') {
    return searchFilterList.value;
  } else if (selectedRegion.value !== 'All') {
    return regionFilterList.value;
  } else {
    return props.countries;
  }
});
// const filteredCountries = computed(() => {
//   if (searchedCountry.value !== '') {
//     return props.countries.filter((country) =>
//       country.name.common.toLowerCase().includes(searchedCountry.value.toLowerCase())
//     );
//   } else if (selectedRegion.value !== 'All') {
//     return props.countries.filter((selectedCountry) => selectedCountry.region === selectedRegion.value);
//   } else {
//     return props.countries;
//   }
// });

const props = defineProps({
  countries : {
    type: Object,
    required:true
  }
})

const searchClear = () => {searchedCountry.value = '';};
const regionUpdate=(regionChanged) =>(selectedRegion.value = regionChanged);


</script>