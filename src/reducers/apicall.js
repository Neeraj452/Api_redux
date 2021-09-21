const intialState={
      useData:[]
};

const apiState = (state = intialState, action) =>{
      switch(action.type){
            case "userDetails":
            state.useData.push(action.data);
            return {...state}

            case "useDelete":
            state.useData[0]=state.useData[0].filter((Element)=>
                  (Element.id!==action.data)
            )
            return {...state};
            
            default: return state; 
      }
}
export default apiState;