
const intialState={
      useData:[],
      setuserData:[],
      fullData:[],
      user:""
};


const apiState = (state = intialState, action) =>{
     
      switch(action.type){
            case "userDetails":
                  state.useData = (action.data);
                  state.fullData = action.data
                  return {...state}

            case "useDelete":
                  state.useData=state.useData.filter((Element)=>
                  (Element.id!==action.data))
                  return {...state};

            case "searchUser":
                  state.user = action.data
                  state.useData = state.fullData.filter((Element)=>
                  Element.first_name.includes(state.user))
                  return {...state} 
            case "search":
                  state.useData=state.useData.filter((Element)=>
                  (Element.first_name.indexOf(state.user)>-1))
                  return {...state} 

            default: return state; 
      }
}
export default apiState;