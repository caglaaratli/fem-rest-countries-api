<template>
    <div class="flex cursor-pointer items-center dark:text-white" @click="switcherTheme">
        <Icon v-if="theme=='light'" name="light" />
        <Icon v-if="theme=='dark'" name="dark" />
    </div>
       
</template>

<script setup>
import {inject} from 'vue';
import Lookie from "lookie";
import Icon from "@/components/Icon.vue"

const theme=inject('theme');

const switcherTheme = () => {
    if(theme.value=='light'){
        theme.value='dark';
        Lookie.set('theme',theme.value)
    }
    else{
        theme.value='light';
        Lookie.set('theme',theme.value)
    }

}
</script>