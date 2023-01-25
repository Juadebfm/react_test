import "./App.css";
// import { MyComponent } from "./components/Greet";
import Hello from "./components/Hello";
// import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/* <MyComponent />
      <Welcome /> */}
      <Hello name="Bruce" surName="DeleGiwa" heroName="Batman"><p>This Is Children Props</p></Hello>
      <Hello name="Bruce" surName="DeleGiwa" heroName="Batman" />
      <Hello name="Diana" surName="DeleGiwa" heroName="Superman" />
      <Hello name="Dele" surName="DeleGiwa" heroName="Wonderman" />
    </div>
  );
}

export default App;
