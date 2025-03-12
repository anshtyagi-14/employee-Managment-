import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { GetLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/Authprovider';

const App = () => {
  // localStorage.clear()
  // useEffect(()=>{
  //   // setLocalStorage()
  //   GetLocalStorage()
  // },[])

  const [user,setUser]=useState(null);
  const [LoggedInUserData,setLoggedInUserData]=useState(null);
  const AuthData=useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      const storedUser = JSON.parse(localStorage.getItem("LoggedInUser"));
      if (storedUser) {
        setUser(storedUser.role);
        setLoggedInUserData(storedUser.data);
      }
    }
  }, []);

  const HandleLogin=(email,password)=>{
    if(email=="a@e.com" && password=="123"){
      setUser("Admin")
      localStorage.setItem("LoggedInUser",JSON.stringify({role:"Admin"}))
    }else if(AuthData){
      const employee=AuthData.empData.find((e)=>email==e.email && password==e.password)
      if(employee){
      setUser("Employee")
      setLoggedInUserData(employee)
      localStorage.setItem("LoggedInUser",JSON.stringify({role:"Employee",data:employee}))}
    }else{
      alert("Invalid credentials!")
    }
  }


    return (
        <>
          {!user?<Login HandleLogin={HandleLogin} />:""}
          {user=="Admin"?<AdminDashboard changeUser={setUser}/>:(user =="Employee" ?<EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/>:null)}
        </>
    );
};

export default App;