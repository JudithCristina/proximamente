import logo from "../src/assets/logo.svg";
import cargando from "../src/assets/cargando.svg";
import "./App.css";

function App() {
  return (
    <div className="box-proximamente">
      <div className="title">
        ¡Web en<br></br>
        <span>camino!</span>
      </div>
      <img src={cargando}className="cargando"/>
      <div className="subtitle">
      ¡Pronto! Todo para tu 
    <span> bebé en un solo lugar.</span>
      </div>
      <img src={logo}className="logo"/>
    </div>
  );
}

export default App;
