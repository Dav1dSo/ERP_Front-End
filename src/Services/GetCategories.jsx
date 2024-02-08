import axios from "axios";

const GetProductCategories = async () => {
  try {
    const categories = await axios.get(
      `http://localhost:3000/api/produtos/GetCategoryProduct`,
      {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkdEFWR1RQSi8vb0VSWks5YlVPWXhrZXo4UnUvaWlwLlRlZmJtOVhZWDZMam5TWHF2VDZ5ZksiLCJpYXQiOjE3MDc0MjMxMzUsImV4cCI6MTcwNzQyNjczNX0.zZxyPru6XtTp5lIk5udVLFh-huY3hvXMJB_a8qnLTOA`,        },
      }
    );
    return categories.data;
  } catch (error) {
    return console.error("Erro ao obter as categorias:", error);
  }
};

const CreateProduct = async (data) => {
  try {
    await axios.post("http://localhost:3000/api/produtos/createProduct", data, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkdEFWR1RQSi8vb0VSWks5YlVPWXhrZXo4UnUvaWlwLlRlZmJtOVhZWDZMam5TWHF2VDZ5ZksiLCJpYXQiOjE3MDc0MjMxMzUsImV4cCI6MTcwNzQyNjczNX0.zZxyPru6XtTp5lIk5udVLFh-huY3hvXMJB_a8qnLTOA`,
      },
    });
    return "Produto cadastrado com sucesso!";
  } catch (error) {
    return { error: "Error ao cadastrar produto." + error};
  }
};

export { GetProductCategories, CreateProduct };
