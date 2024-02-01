import { List,  WrapMenu } from "./Menu-style";

const Menu = () => {
    return (
        <WrapMenu>
            <List type="none">
                <li><a href="">Produtos</a></li>
                <li><a href="">Relatórios</a></li>
                <li><a href="">Vendas</a></li>
            </List>
        </WrapMenu>
    )
}

export default Menu;