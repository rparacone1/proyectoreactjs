import CounterContainer from "./components/common/counter/CounterContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let saludo = "Bienvenido a la tienda"
  return (
    <>
      <Navbar />
      <ItemListContainer saludo = {saludo}/>
      {/*
      <CounterContainer />
      <h2>Hola</h2>
      */}
    </>
  );
}

export default App;

// const sumar = ()=>{

//   let a = 15
//   let b = 12

//   let nombre= "juan"

//   return a b nombre

// }
