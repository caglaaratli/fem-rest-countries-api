<template>
    <div class="w-full md:w-5/12 relative  "> 
       <Icon 
            name="search" 
            :size="20" 
            class=" absolute top-4 left-4  text-gray"
          />
       <input 
            type="text" 
            class="dark:bg-dark-blue dark:text-white  dark:outline-dark-gray
                   shadow rounded-sm 
                   w-full h-full p-4 pl-12 "
            placeholder="Search for a country..."
            :value="searchCountry"
            @input="$emit('update:searchCountry', $event.target.value)"
        >
        <Icon
            name="clear" 
            :size="20"
           class=" absolute top-4 right-5 text-gray"
           @click="$emit('searchClear')"
            
        />
    </div>
   
</template>

<script  setup>
import Icon from "@/components/Icon.vue"

defineProps(['searchCountry'])
defineEmits(['update:searchCountry','searchClear'])

</script>
