export const getApi = (res)=>{
     return{
           type:"userDetails",
           data:res
     }
}
// import axios from 'axios';
// export const apicalls =()=>{
//       console.log("Hii Axiox")
//       return async function (dispatch){
//         const apidata = await axios.get('https://reqres.in/api/users')
//         dispatch({type:"userDetails",data:apidata.data.data})
//         console.log("Hii Axiox1")
      
//       }
//     }
  
export const DeleteData = (res)=>{
   
      return{
            type:"useDelete",
            data:res
      }
 }

 export const userText = (res)=>{
   
      return{
            type:"searchUser",
            data:res
      }
 }

 export const Search = ()=>{
   
      return{
            type:"search",
      
      }
 }