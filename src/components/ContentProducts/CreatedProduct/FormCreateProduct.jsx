import { useState } from "react";
import {
  Button,
  FormContainer,
  FormGroup,
  Input,
  Label,
  TextArea,
  WrapForm,
} from "./FormCreateProduct-style";

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

  return (
    <WrapForm>
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="codProduct">Código:</Label>
        <Input
          type="number"
          id="codProduct"
          name="codProduct"
          value={formData.codProduct}
          onChange={handleChange}
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
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="image">Imagem:</Label>
        <Input
          type="text"
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
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Descrição:</Label>
        <TextArea
          id="description"
          name="description"
          value={formData.description}
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
