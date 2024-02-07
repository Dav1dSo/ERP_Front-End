import axios from "axios";

const GetProductCategories = async () =>  {
    try {
        const categories = await axios.get(`http://localhost:3000/api/produtos/GetCategoryProduct`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkNDIwSXBuU2xHRXNVWHVrRHJ6b3BWT3F5ejF0dkhuNURBSWZiVi9HSjFHMi45L1dsRm5sOTYiLCJpYXQiOjE3MDczMTYwODAsImV4cCI6MTcwNzMxOTY4MH0.CsVZv23LH6wENROipfS4Ugk9ROi1L8GWnOmxgj98aT0`, // Assuming your token follows the Bearer schema
              },
        });
        return categories.data;
    } catch (error) {
        return console.error("Erro ao obter as categorias:", error);        
    }
}

export default GetProductCategories;