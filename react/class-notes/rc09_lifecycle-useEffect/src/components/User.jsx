import { useEffect, useState } from "react"

const User = () => {

   const [userData, setUserData] = useState({
      name:{first:"", last:""},
      email:"",
      dob:"",
      picture:"",
      city:"",
      cell:""
   })


   const getUser = async () => {
      const res = await fetch("https://randomuser.me/api/")
      const data = await res.json()
      console.log(data.results[0])
      setUserData(data.results[0])
   }

//?componentDidMount
   useEffect (() => {
      const timer = setInterval(getUser, 2000)
      getUser()

      //?componentwillunmount
      return() =>{
         console.log("timer iptal edildi")
         clearInterval(timer)
      }
   

   }, [])
   

  

   return(
      <div className="m-4">
         <img className="rounded-circle" src={userData.picture.large} alt="" />
         <p>Hi My Name is</p>
         <h2>{userData.name.first + " " + userData.name.last}</h2>
         <h4>{userData.email}</h4>
         <h4>{userData.dob.date}</h4>
         <h4>{userData.city}</h4>
         <h4>{userData.cell}</h4>
         <button onClick={getUser}> new User</button>
      </div>
   )
}

export default User