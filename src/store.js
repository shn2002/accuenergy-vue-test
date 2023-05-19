import { createStore } from 'vuex';
import * as util from './util.js'

const store = createStore({
    state: {
        msg: {
        },
        showError: false,
        showElement: false,
        count: 0

      },
    mutations: {
        increment(state) {
            state.count++;
          },
          decrement(state) {
            state.count--;
          },

        setLocation(lat, long, state) {
            util.setLocation(lat, long, state)
        },
        setShowElement(state) {
            util.setShowElement(state)
        },
        setError(err, state) {
            util.setShowElement(err, state)
        },
        initState(state){
            util.initState(state)
        }      
    },
    actions: {
        setLocation(context) {
            context.commit('setLocation');
        },
        setShowElement(context) {
            context.commit('setShowElement');
        },
        setError(context) {
            context.commit('setError');
        },
        initState(context) {
            context.commit('initState');
        },
        increment(context) {
            context.commit('increment');
          },
          decrement(context) {
            context.commit('decrement');
          },
    },
    getters: {
        getCount(state) {
            return state.count;
        }
    }
});

export default store;