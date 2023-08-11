import NavBar  from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
function App() {
  return(
    <div>
      {/*navbar */} 
      <NavBar/>
      {/*itemListContainer */}
      <ItemListContainer greeting="Bienvenidos!!"/>
    </div>
  )
}

export default App