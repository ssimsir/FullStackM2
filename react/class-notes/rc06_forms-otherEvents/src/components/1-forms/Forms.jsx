import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from "react"

function Forms() {
  const [username, setUsername] = useState("Mehmet")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (e) => {
    // console.log(e.target.value) //? inputtaki degeri verir.
    setUsername(e.target.value) //? state'imizi güncelledik.
  }

  //? state her güncellendikten sonra component re-render olur ve değişen kısımlar DOM'a basilir.
  console.log(username)

  return (
    <Form>
      <h1 className="text-danger">FORMS</h1>
      <Form.Group className="mb-3" controlId="username">
        {/* Short circuit veya ternary ile kosullu rendering yapılabilir. */}
        <Form.Label>{username && <span>Hello {username}</span>}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          onChange={handleUsername}
          id="username"
          name="username"
          value={username}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Forms
