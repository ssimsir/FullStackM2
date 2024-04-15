import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const PersonDetail = () => {
  const [person, setPerson] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  console.log(id)
  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getPerson()
  }, [])

  return (
    <div className="container text-center mt-4">
      <img className="rounded" src={person?.avatar} alt="img" />

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

export default PersonDetail
