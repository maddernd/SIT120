Vue.component('slot-test', {
  template: '#slot-test',
  data() {
      return {
        childTitle: 'title',
        childSubtitle: 'subtitle'
      }
  },
  props:{
    subtitle: {
      type: String,
      required: true
    }
  }
})

new Vue ({
  el: '#app',
  data() {
      return {
        title: 'Sharpei life',
        subtitle: 'Sharpei 1 goes here'
    }
  }
})