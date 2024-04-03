import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData } from "../helpers/data"

let todos = JSON.parse(localStorage.getItem("appointments")) || []

const Home = () => {
  const [appointments,setAppointments] = useState(JSON.parse(localStorage.getItem("appointments")) || [])
  console.log(appointments);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors setApps={setAppointments} apps={appointments} />
      <AppointmentList apps={appointments} setApps={setAppointments} />
    </main>
  )
}

export default Home

//! Lifting State Up

//*React da veri akışı her zaman tek yönlüdür. Yukarıdan aşağıya. Sibling componentler arası veri akışı yoktur. Bu nedenle eğer aynı state e birden fazla componentte ihtiyaç duyuluyorsa veya statein hem parent componentten hem de child componentten yönetilmesi gerekiyorsa bu durumda Lifitng State Up(Statei Yukarı Kaldırma) konseptine ihtiyaç duyulur.

//+ Bu tarz durumlarda ilgili state ortak parente taşınarak orada tanımlanır ve oradan dağıtımı gerçekleştirilir. Setter metodunu da childlara props yoluyla ulaştırarak statein ilgili childlar tarafından güncellenmesi sağlanır. Böylelikle aslında react da veri akışının yönü değişmiş olur. Yani doğal olmayan yollardan veri akışını aşağıdan yukarıya, kardeşler arasında sağlamış oluyoruz.

//? Örneğimizde appointment ekleme işlemini Doctors componentinde yapıyoruz ama listeleme işlemini appointmentList componentinde yapıyoruz. appointments stateini doctors da oluşturursam verileri appointmentListe aktaramam o nedenle appointments stateini doctors ve appointmentList componentlerinin ortak parentına kaldırarak appointments stateini ve setter metodunu buradan doctors componentine göndererek ekleme işlemini gerçekleştirmiş oluyoruz ve yine appointments stateini de appointmentList componentine göndererek appointmentsları sergilemiş oluyorum. doctors componentinde ekleme işlemi yaptığımda appointments statei güncelleneceği için home componenti yeniden render olacak ve appointmentList componenti güncel veriyi ekrana sergilemiş olacak.