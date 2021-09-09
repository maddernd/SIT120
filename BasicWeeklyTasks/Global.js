//Global
//Global Registration of Component
Vue.component("example-component-test1", {
    template: "<h2>Global Component Sharpei Life</h2>",
    });
    //Global
    var globalComponent = new Vue({
    el: "#globalComponent",
    data: {
    message: "GlobalComponentTest",
    },
    });
    //Local
    var localComponent = new Vue({
    el: "#localComponent",
    components: {
    "example-component-test2": {
    template: "<h2>Sharpei Life test local component</h2>",
    },
    },
    });