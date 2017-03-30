// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './reset.css'
import dumbWrapper from './Ajax/vars'

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
window.router = router;
window.isFirst = true;
window.alert = function(name) {
    var iframe = document.createElement("IFRAME");
    iframe.style.display = "none";
    iframe.setAttribute("src", 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
}