import Vue from 'vue';

Vue.config.errorHandler = (err, vm, info) => {
  console.log('err');
  console.log(err);
  console.log('*********************');

  console.log('vm');
  console.log(vm);
  console.log('*********************');

  console.log('info');
  console.log(info);
  console.log('*********************');

  // err: error trace
  // vm: component in which error occured
  // info: Vue specific error information such as lifecycle hooks, events etc.

  // TODO: Perform any custom logic or log to server
};
