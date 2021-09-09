Vue.createApp({
  data() {
    return {
      selected: '1',
      options: [
        { text: 'Sharpei1', value: '1' },
        { text: 'Sharpei2', value: '2' },
        { text: 'Sharpei3', value: '3' }
      ]
    }
  }
}).mount('#v-model-select-dynamic')