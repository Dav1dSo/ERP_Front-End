import ContentProducts from "../ContentProducts/ContentProducts";
import ContentRelatorios from "../ContentRelatorios/ContentRelatorios";
import ContentVendas from "../ContentVendas/ContentVendas";
import WrapContentMain from "./contentMain-style";

const ContentMain = ({ Option }) => {
  let contentComponent;

  switch (Option) {
    case "Produtos":
      contentComponent = <ContentProducts />;
      break;
    case "Relatorios":
      contentComponent = <ContentRelatorios />;
      break;
    case "Vendas":
      contentComponent = <ContentVendas />;
      break;
  }

  return <WrapContentMain>{contentComponent}</WrapContentMain>;
};

export default ContentMain;
