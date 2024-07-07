import "./App.css";
import DoggyIcon from "./core/doggyIcon";

function App() {
  return (
    <>
      <DoggyIcon
        icon="search"
        // style={{ width: "100px", height: "100px" }}
        size="medium"
      />
      <DoggyIcon icon="search" colorType="destructive" size="medium" />
      <DoggyIcon icon="search" colorType="safe" size="medium" />
      <DoggyIcon icon="search" colorType="warning" size="medium" />
      <DoggyIcon icon="search" colorType="info" size="medium" />
    </>
  );
}

export default App;
