//Custom event for increasing counter when button pressed
Vue.component("button-counter", {
    template: '<button v-on:click="increase">{{ number }}</button>',
    data: function () {
    return {
    number: 0,
    };
    },
    methods: {
    increase: function () {
    this.number += 1;
    this.$emit("increase");
    },
    },
    });
    var increase = new Vue({
    el: "#increaseEvent",
    data: {
    number: 0,
    },
    methods: {
    increaseTotal: function () {
    this.number += 1;
    },
    },
    });