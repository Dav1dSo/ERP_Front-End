import { ButtonGreen, ButtonYellow, ContainerProducts, StyledButton, WrapButtons } from "./ContentProducts-style";

const ContentProducts = () => {
  return (
      <ContainerProducts>
        <h1>Gerenciar Produtos</h1>
      <WrapButtons>
        <ButtonGreen>Criar Produto</ButtonGreen>
        <ButtonYellow>Todos produtos</ButtonYellow>
        <StyledButton>Filtrar</StyledButton>
      </WrapButtons>
    </ContainerProducts>
  );
};

export default ContentProducts;
