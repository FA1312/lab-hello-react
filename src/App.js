import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <div className="containerapp">
      <NavBar></NavBar>
      <Main></Main>
      <Cards></Cards>
    </div>
  );
}
export default App;
