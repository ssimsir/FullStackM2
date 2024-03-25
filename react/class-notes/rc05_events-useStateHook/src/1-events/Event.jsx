const Event = () => {

  let message = "Hoşgeledin FS16"


  //? Event handler fonksiyonunun tanımlanması
  const handleTikla = (e) => {
    alert("tıklandı")
    console.log(e.target)
    console.log("ID : ",  e.target.id)
    console.log("NAME : ",  e.target.name)

  }


  function handleCikis(msg){
    console.log(msg)

  }
  
  const handleMsgDegistir = function(){
    message = "Merhaba React Dostları"
    console.log(message)
  }

  return (
    <div>
      <h1>Events</h1>

      {/* Event yazıldı */}
      <button onClick={handleTikla} id="btn" name="my-button">Tıkla</button>

      <button onClick={() => alert("silindi")}>Sil</button>

      <button onClick={() =>handleCikis(message)}>Çıkış</button>

      <button onClick={handleMsgDegistir}>Değiştir</button>

      <p>{message}</p>
    </div>
  )
}

export default Event
