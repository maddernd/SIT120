var testingProps = new Vue({
    el: "#Workingprops",
    data: {
    greeting: "Sharpeis have lots of wrinkles",
    },
    components: {
    "greeting-container": {
    props: ["greeting"],
    data: function () {
    return { name: "Daniel" };
    },
    template: "<div> {{ greeting }}, {{ name }}</div>",
    },
    },
    });