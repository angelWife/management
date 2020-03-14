export default {
    state: {
        resetDialog: false,
    },
    getters: {
 
    },
    mutations: {
       showResetDialog(state){
        state.resetDialog = true
       },
       hideResetDialog(state){
        state.resetDialog = false
       }
    },
    actions: {
    }
}