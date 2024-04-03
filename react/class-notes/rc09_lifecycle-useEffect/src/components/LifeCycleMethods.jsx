//?=============================================================
//?                 LIFECYCLE METOTLARI
//?      https://reactjs.org/docs/react-component.html
//?=============================================================

//* Lifecycle metotlari componentlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React metotlaridir.
//* Ornegin bir component olusturuldugunda, DOM'a basildiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olusturulmasi (constructor),
//* Bir componentin DOM agacina eklenmesinin hemen sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional) Bir componentin guncellenmesinin hemen sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

import React from "react"

class LifeCycleMethods extends React.Component {
  constructor(props) {
    console.log("1-Constructor running")
    super(props)
    this.state = {
      count: 0,
    }
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  componentDidMount(){
    console.log("3-component did mount running")
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  componentWillUnmount(){
    console.log("componened did upmount ")
  }

  render() {
    console.log("2-Render running")
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    )
  }
}
export default LifeCycleMethods
