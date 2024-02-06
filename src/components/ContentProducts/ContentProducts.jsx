import { useState } from "react";
import { ButtonGreen, ButtonYellow, ContainerProducts, StyledButton, WrapButtons } from "./ContentProducts-style";
import FormCreateProduct from "./CreatedProduct/FormCreateProduct";

const ContentProducts = () => {
    const [showForm, setShowForm] = useState(false);  

    return (
        <ContainerProducts>
            <h1>Gerenciar Produtos</h1>
            <WrapButtons>
                <ButtonGreen onClick={() => setShowForm(true)}>Criar Produto</ButtonGreen>
                <ButtonYellow>Todos produtos</ButtonYellow>
                <StyledButton>Filtrar</StyledButton>
            </WrapButtons>
            {showForm && <FormCreateProduct />} 
        </ContainerProducts>
    );
};

export default ContentProducts;
