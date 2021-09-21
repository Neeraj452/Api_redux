export const getApi = (res)=>{
     return{
           type:"userDetails",
           data:res
     }
}

export const DeleteData = (res)=>{
      console.log("D",res)
      return{
            type:"useDelete",
            data:res
      }
 }