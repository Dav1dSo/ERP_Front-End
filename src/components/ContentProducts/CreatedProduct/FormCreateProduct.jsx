import { useEffect, useState } from "react";
import {
  Button,
  FormContainer,
  FormGroup,
  Input,
  Label,
  TextArea,
  WrapForm,
} from "./FormCreateProduct-style";
import GetProductCategories from "../../../Services/GetCategories";

const FormCreateProduct = () => {
  const [formData, setFormData] = useState({
    codProduct: "",
    name: "",
    price: "",
    description: "",
    image: "",
    stock: "",
    sold: 0,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      codProduct: "",
      name: "",
      price: "",
      description: "",
      image: "",
      stock: "",
      sold: 0,
      category: "",
    });
  };

  const [optionsCategories, setCategories] = useState([]);

  useEffect(() => {
    const GetCategories = async () => {

      try {
        const categories = await GetProductCategories();
        setCategories(categories);
      } catch (error) {
        return {message: "Não foi possível realizar operação no momento."}
      }
    };
    GetCategories();
  }, []);

  const SelectCategories = optionsCategories.map(cat => cat.category);

  return (
    <WrapForm>
      <FormContainer onSubmit={handleSubmit}>
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
          <Label htmlFor="image">Imagem:</Label>
          <Input
            type="file"
            id="image"
            name="image"
            value={formData.image}
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
          <Input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            list="category-options"
            placeholder="Selecione a categoria"
            required
          />
          <datalist id="category-options">
            {SelectCategories.map((category, index) => (
              <option key={index} value={category} />
            ))}
          </datalist>
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
