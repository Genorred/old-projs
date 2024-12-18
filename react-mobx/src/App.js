
import AnyStore from "./store/AnyStore";

function App() {
  return (
    <div className="App">
      klnlk
      <header className="App-header">

        <p onClick={()=> console.log(AnyStore.numb)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {AnyStore.nnumb}
        </a>
      </header>
    </div>
  );
}

export default App;
