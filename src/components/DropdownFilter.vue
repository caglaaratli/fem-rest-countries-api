<template>
    
    <select @change="$emit('changedFilter',$event.target.value)" class=" outline-inherit w-48 md:ml-auto py-4 px-6 shadow cursor-pointer
                                    text-dark-gray border-r-[16px] border-white 
                                    dark:border-dark-blue rounded-sm font-medium 
                                    dark:bg-dark-blue dark:text-white">
        <option v-for="region in REGIONS" :key="region">{{ region }}</option>
    </select>
  
</template>

<script setup>

import { defineEmits } from 'vue';

const REGIONS=  ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Pacific']
defineEmits(['changedFilter'])

</script>
