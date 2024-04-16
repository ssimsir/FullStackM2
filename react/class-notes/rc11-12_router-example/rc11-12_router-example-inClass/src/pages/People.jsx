import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import NotFound from "./NotFound"

const People = () => {
  const [people, setPeople] = useState([])
const [error, setError]= useState(false)

  const navigate = useNavigate()

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => 
        {
          if (!res.ok){
            setError(true)
            throw new Error("User can not found")
          }
            return res.json()
        }
      )
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getPeople()
  }, [])

//Conditional rendering

  if(error){
    return <NotFound />
    
  } else {

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
              onClick={() => navigate(`/people/${id}`)}
            >
              <img className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}
}

export default People
