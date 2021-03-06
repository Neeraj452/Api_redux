import React, { useEffect } from 'react'
import './App.css';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import { getApi, DeleteData, userText, Search} from './actions/index';

const  App = ()=> {
  const dispatch = useDispatch()
  const myState = useSelector((store)=> store.apiState)
  console.log("myState1",myState.useData);

  const apicalls =async()=>{
  const apidata = await axios.get('https://reqres.in/api/users')
  dispatch(getApi(apidata.data.data))
  }
  
  useEffect(() => {
    apicalls();
  },[]) 
  return (
    <>
      <h1>User Details </h1>
      <label>Search User By Name or Email</label>
      <input type="text" onChange={(event)=> dispatch(userText(event.target.value))} value={myState.user}/>
      <button onClick={()=> dispatch(Search())}> Search</button>
      <table>
       
        <th>id</th>
        <th>email</th>
        <th>First Name</th>
        <th>Second Name</th>
        <th>avatar</th>
        <th>Delete</th>
        
        {
          myState.useData.map((Element)=>{
           const {id,email,first_name,last_name,avatar} = Element;
           return (
             <tr>
               <td>{id}</td>
               <td>{email}</td>
               <td>{first_name}</td>
               <td>{last_name}</td>
               <td> <img src={avatar} alt="neeraj img" className = "rounded img-responsive card-img-top" width="250" height="150"/></td>
               <td><button type="button" onClick={() => dispatch((DeleteData(id)))} > Click Here</button> </td>
             </tr>
           )
          })
        }
        
      </table>

    </>
  )
}
export default App;
