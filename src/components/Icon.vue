<template>
    <icomoon :iconSet="iconSet" v-bind="$props" />
  </template>
  
  <script>
  import { Icomoon } from "vue-icomoon";
  import iconSet from "./selection.json";
  
  export default {
    name: "Icon",
    components: { 
        Icomoon
    },
    props:{
        name:{
            type:String,
            required: true,
        }
    },
    setup(props) {
      return {
        iconSet,
        props,
     
      };
    },
  };
  </script>