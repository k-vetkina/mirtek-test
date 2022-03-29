import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		price: 1000,
		cnt: 1,
		status: 'none'
	},
	getters: {
		price: state => state.price,
		cnt: state => state.cnt,
		status: state => state.status,
		total: state => state.price * state.cnt
	},
	mutations: {
		decrease(state){
			if(state.cnt > 1){
				state.cnt--;
			}
		},
		increase(state){
			state.cnt++;
		},
		setCnt(state, payload){
			let newCnt = parseInt(payload.cnt);
			state.cnt = (isNaN(newCnt) || newCnt < 1) ? 1 : newCnt;
		},
		setStatus(state, payload){
			state.status = payload.status;
		}
	},
	actions: {
		send(store){
			store.commit('setStatus', { status: 'pending' });

			setTimeout(() => {
				store.commit('setStatus', { status: 'done' });
			}, 1000);
		}
	},
	strict: process.env.NODE_ENV !== 'production'
});