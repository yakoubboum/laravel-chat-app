import { createApp } from 'vue';
import IncrementCounter from './components/IncrementCounter.vue';
import ChatComponent from './components/ChatComponent.vue';

createApp({})
  .component('IncrementCounter', IncrementCounter)
  .component('ChatComponent', ChatComponent)
  .mount('#app')
