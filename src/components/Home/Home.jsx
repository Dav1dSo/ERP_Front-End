import { useState } from "react";
import ContentMain from "../ContentMain/ContentMain";
import Menu from "../Menu/Menu";

const Home = () => {
  const [selectOption, setSelectOption] = useState();

  const handleSelectOptionChange = (option) => {
    setSelectOption(option);
  };

  return (
    <div id="Admin">
      <Menu onSelectOptionChange={handleSelectOptionChange} />
      <ContentMain Option={selectOption} />
    </div>
  );
};

export default Home;
