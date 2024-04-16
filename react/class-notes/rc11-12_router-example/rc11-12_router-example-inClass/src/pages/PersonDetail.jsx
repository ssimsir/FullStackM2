import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import NotFound from "./NotFound"
import spinner from "../img/Spinner-2.gif"

const PersonDetail = () => {
  const [person, setPerson] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  console.log(id)
  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true)
          throw new Error("User can not be found")
        }
        return res.json()
      })
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getPerson()
  }, [])

if (loading) {
  return <img src={spinner}/>
}

  //? Conditional rendering
  if (error) {
    return <NotFound />
  } else {
    return (
      <div className="container text-center mt-4">
        <img className="rounded" src={person?.avatar} />

        <h6>
          {person?.first_name} {person?.last_name}
        </h6>
        <p>{person?.email}</p>
        <div>
          <button className="btn btn-danger" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="btn btn-success" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    )
  }
}

export default PersonDetail
