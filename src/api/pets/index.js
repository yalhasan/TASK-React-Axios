import instance from "..";

const getAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getPetById = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};

const addPet = async (name, type, image, adopted) => {
  const res = await instance.post(`/pets/`, {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });
  return res.data;
};

const updatePet = async (id, name, type, image, adopted) => {
  const res = await instance.put(`/pets/${id}`, {
    name: name,
    type: type,
    image: image,
    adopted: !adopted,
  });
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`/pets/${id}`);
  return res.data;
};

export { getAllPets, getPetById, addPet, updatePet, deletePet };
