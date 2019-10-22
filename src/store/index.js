import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

const state = {
    showBottomNav : true
};

export default new VueX.Store({
    state
})