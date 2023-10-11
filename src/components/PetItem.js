import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { deletePet } from "../api/pets";
import NotFound from "./NotFound";

const PetItem = ({ pet }) => {
  const { id } = useParams();
  const QueryClient = useQueryClient();
  const { mutate: deleteThePet } = useMutation({
    mutationKey: ["deletePet"],
    mutationFn: () => deletePet(id),
    onSuccess: () => {
      QueryClient.invalidateQueries("pets");
    },
  });

  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{pet.name}</h1>
      <img
        src={pet.image}
        alt={`${pet.name}-image`}
        className="w-[200px] rounded-md
      "
      />
      <Link to={`/pets/${pet.id}`}>
        <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
          View
        </button>
      </Link>

      <button
        onClick={() => deleteThePet()}
        className="w-[70px] border border-black rounded-md  hover:bg-red-400"
      >
        Delete
      </button>
    </div>
  );
};

export default PetItem;
