export default {
    state: {
        perms: [],  // 用户权限标识集合
        role:{
            name: 'recoMember', // recoMember:认定会员  nonRecoMember:非认定会员   associateMember 协会会员
            type: 'retire' // froze 冻结 retire 退会
        }     
    },
    getters: {
   
    },
    mutations: {
        setPerms(state, perms){  // 用户权限标识集合
            state.perms = perms;
        }
    },
    actions: {
    }
}