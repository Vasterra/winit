
window.Vue = require('vue');
//require('./plugins/vue-particles');


import СontainerList from "./components/СontainerList.vue";

const list = new Vue({
    el: '#list',
    render: h => h(СontainerList)
});
