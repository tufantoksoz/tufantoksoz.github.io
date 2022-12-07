<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './css/app.scss';

export default defineComponent({
  name: 'App',
  errorCaptured(err, vm, info) {
    console.log('err');
    console.log(err);
    console.log('*********************');

    console.log('vm');
    console.log(vm);
    console.log('*********************');

    console.log('info');
    console.log(info);
    console.log('*********************');
  },
});
</script>
