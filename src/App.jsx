import { useState } from "react";
import "./App.css";
import ContentMain from "./components/ContentMain/ContentMain";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [selectOption, setSelectOption] = useState();

  const handleSelectOptionChange = (option) => {
    setSelectOption(option);
  };
  return (
    <>
      <NavBar />
      <div id="Admin">
        <Menu onSelectOptionChange={handleSelectOptionChange} />
        <ContentMain Option={selectOption}/>
      </div>
    </>
  );
}

export default App;
