import axios from "axios";

const token= ''

const GetProductCategories = async () => {
  try {
    const categories = await axios.get(
      `http://localhost:3000/api/produtos/GetCategoryProduct`,
      {
        headers: {
            Authorization: `Bearer ${token} `, },
      }
    );
    return categories.data;
  } catch (error) {
    return console.error("Erro ao obter as categorias:", error);
  }
};

const CreateProduct = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/api/produtos/createProduct", data, {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });
    return response.data.message; 
  } catch (error) {
    return error.response.data.message;
  }
}; 

export { GetProductCategories, CreateProduct };
