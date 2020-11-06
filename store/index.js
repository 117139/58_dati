import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		platform:'',
		userName: "游客",
		loginDatas:'',
		company:'',
		uid:'',
		phone:'',
		token:'',
		laheiArr:[],
		uuid:'',
		
		
		
		new_xz:[],    //批量操作
		new_problem:'' ,//新问题
		ls_prodata:'',
		ls_pro_yh:'',
		fj_data:'',
		bj_prodata:''
	},
	mutations: {
		edit_problem(state, bj_prodata){//编辑问题
			state.bj_prodata = bj_prodata || '';
		},
		setls_prodata(state, ls_prodata) {  //设置问题临时数据
			state.ls_prodata = ls_prodata || '';
		},
		setls_pro_yh(state, ls_pro_yh) {  //设置问题调研用户临时数据
			state.ls_pro_yh = ls_pro_yh || '';
		},
		clearls_pro(state, ls_pro_yh){//清除数据
			state.ls_prodata =''
			state.ls_pro_yh = ''
		},
		setfj_data(state, fj_data) {
			state.fj_data = fj_data || '';
		},
		setuuid(state, uuid) {
			state.uuid = uuid || 'h5';
		},
		login(state, userName) {
			state.userName = userName || '新用户';
			state.hasLogin = true;
			console.log(userName)
			console.log(state.userName)
		},
		lahei(state, id) {
			// state.userName = userName || '新用户';
			// state.hasLogin = true;
			state.laheiArr.push(id)
			console.log(state.laheiArr)
		},
		logindata(state, logindata) {
			state.loginDatas = logindata || '';
			Vue.set(state,'loginDatas',logindata)
			// state.company=logindata.company
			// state.uid= logindata.id
			// state.phone= logindata.phone
			// state.token= logindata.token
			console.log(logindata)
			console.log(state.loginDatas)
		},
		setplatform(state, platform) {
			state.platform = platform || 'android';
		},
		logout(state) {
			state.userName = "游客";
			state.hasLogin = false;
		},
		
		// ****************************************
		//评论操作
		setnew_xz(state, new_xz) {
			state.new_xz = new_xz||[];
		},
		//新题
		setnew_problem(state, new_problem) {
			state.new_problem = new_problem||[] ;
		},
	}
})

export default store
