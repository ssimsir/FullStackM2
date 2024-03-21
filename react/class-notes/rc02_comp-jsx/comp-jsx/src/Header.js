//* Harici bir dosya icerisinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima acilmis olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

//? Header Component
function Header() {
  //! JS alani
  const yazi = "Hello FS16"
  return (
    <header>
      {/* JSX alani yorum satiri  */}
      <h1 className="par">{yazi}</h1>
    </header>
  )
}
export default Header
