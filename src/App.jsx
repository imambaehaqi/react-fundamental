import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <>
      <div className="App">
        <Article name="Imam Baehaqi" titles={["JSX", "JAVA", "CSS"]} />
        <br />
        <Article name="Budi Nugraha" titles={["Spring", "Laravel", "React"]} />
      </div>
    </>
  );
}

export default App;
