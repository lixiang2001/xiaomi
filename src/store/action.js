export default {
    setUserName(context,username){
        context.commit('setUserName',username);
    },
    setCartCount(context,cartcount){
        context.commit('setCartCount',cartcount);
    }   
}