var vueArray = new Vue ({
    el: "#vueArray",
    //data for hadnling.html
    data: {
    itemList : [
    {name: "Milk"},
    {name: "Bread"},
    {name: "Orange Juice"},
    ]
    },
    methods: {
    updateList: function() {
    this.itemList.push({name: this.$refs.updateList.value});
    }
    }
    })