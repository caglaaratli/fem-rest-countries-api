<template>
<CountryMainPage :countries="countries"/>
</template>

<script setup>

import {inject} from 'vue';
import CountryMainPage from '@/components/CountryMainPage.vue';

const countries = inject("countries");

</script>