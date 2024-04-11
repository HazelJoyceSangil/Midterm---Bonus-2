import './App.css';



function Sangil({display}) {
  return (
    <div className="Sangil">
      {display}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Sangil display={"hello  world"}/>
     
    </div>
  );
}


export default App;