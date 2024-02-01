import { useEffect, useState } from "react";
import { List,  WrapMenu } from "./Menu-style";
import ContentMain from "../ContentMain/ContentMain";

const Menu = ({onSelectOptionChange }) => {

    const [ selectOption, setSelectOption ] = useState('Produtos');

    useEffect(() => {
        onSelectOptionChange(selectOption);
      }, [selectOption, onSelectOptionChange]);
    
      const HandleOption = (option) => {
        setSelectOption(option);
      };

    return (
        <WrapMenu>
            <List type="none">
                <li><p onClick={() => HandleOption('Produtos')}>Produtos</p></li>
                <li><p onClick={() => HandleOption('Relatorios')}>Relatórios</p></li>
                <li><p onClick={() => HandleOption('Vendas')}>Vendas</p></li>
            </List>
            <ContentMain option={selectOption} />
        </WrapMenu>
    )
}

export default Menu;