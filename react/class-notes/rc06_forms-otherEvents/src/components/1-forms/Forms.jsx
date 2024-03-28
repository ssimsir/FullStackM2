import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from "react"

function Forms() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (e) => {
    // console.log(e.target.value) //? inputtaki degeri verir.
    setUsername(e.target.value) //? state'imizi güncelledik.
  }

  //? state her güncellendikten sonra component re-render olur ve değişen kısımlar DOM'a basilir.
  console.log(username)

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault() //? submit eventinin doğal davramnışlarını engelle

    //?verilerin nasıl post edilecenin göstermek için eklenmiiştir
    // const res = axios.post("url", {
    //   username: username,
    //   email:email,
    //   password: password
    // })

    alert(`
      username: ${username},
      email:${email},
      password: ${password}
    `)

    //?statelerin veri gğnlerildikten sonra stalerdesi verilerin silinmesi yapıldı
    setEmail("")
    setPassword("")
    setUsername("")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-danger">FORMS</h1>
      <Form.Group className="mb-3">
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

      <Form.Group className="mb-3">
        <Form.Label>{email && <span>Email : {email}</span>}</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}

        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Forms
