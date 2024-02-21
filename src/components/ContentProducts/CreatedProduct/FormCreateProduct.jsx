import { useEffect, useState } from "react";
import {
  Button,
  FormContainer,
  FormGroup,
  Input,
  Label,
  MessageError,
  MessageSuccess,
  Select,
  TextArea,
  WrapForm,
} from "./FormCreateProduct-style";
import {
  GetProductCategories,
  CreateProduct,
} from "../../../Services/ServicesProducts";

const FormCreateProduct = () => {
  const [formData, setFormData] = useState({
    codProduct: "",
    name: "",
    price: "",
    description: "",
    images: null,
    stock: "",
    sold: 0,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images" && files.length > 0) {
      const selectedFile = files[0];
      setFormData({ ...formData, [name]: selectedFile });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("images", formData.images);
    formDataToSend.append("codProduct", formData.codProduct);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("stock", formData.stock);
    formDataToSend.append("sold", formData.sold);
    formDataToSend.append("category", formData.category);

    try {
      const res = await CreateProduct(formDataToSend);
      setFormData({
        codProduct: "",
        name: "",
        price: "",
        description: "",
        images: "",
        stock: "",
        sold: 0,
        category: "",
      });
      res.includes("Error:")
        ? setMessageType("error")
        : setMessageType("success");
      setMessage(res);
      setTimeout(() => {
        setMessage(null);
        setMessageType(null);
      }, 5000);
    } catch (error) {
      console.error("Erro ao criar produto:");
    }
  };

  const [optionsCategories, setCategories] = useState([]);

  useEffect(() => {
    const GetCategories = async () => {
      try {
        const categories = await GetProductCategories();
        setCategories(categories);
      } catch (error) {
        return { message: "Não foi possível realizar operação no momento." };
      }
    };
    GetCategories();
  }, []);

  const SelectCategories = optionsCategories.map((cat) => cat.category);

  return (
    <WrapForm>
      {messageType === "success" && (
        <MessageSuccess>
          <p>{message}</p>
        </MessageSuccess>
      )}
      {messageType === "error" && (
        <MessageError>
          <p>{message}</p>
        </MessageError>
      )}
      <FormContainer onSubmit={handleSubmit} encType="multipart/form-data">
        <FormGroup>
          <Label htmlFor="codProduct">Código:</Label>
          <Input
            type="text"
            id="codProduct"
            name="codProduct"
            value={formData.codProduct}
            onChange={handleChange}
            placeholder="Código do produto:"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome do produto:"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="price">Preço:</Label>
          <Input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Preço do produto:"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="images">imagem:</Label>
          <Input
            type="file"
            id="images"
            name="images"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="stock">Estoque:</Label>
          <Input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Quantidade no estoque:"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="category">Categoria:</Label>
          <Select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Selecione a categoria
            </option>
            {SelectCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Descrição:</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            placeholder="Adicione uma descrição."
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Enviar</Button>
      </FormContainer>
    </WrapForm>
  );
};

export default FormCreateProduct;
