import { useState } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function AddShoePage() {
  const [shoe, setShoe] = useState({ name: "", price: "" });
  const { createShoe } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createShoe(shoe);
    navigate("/shoes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Shoe</h1>
      <input
        type="text"
        placeholder="Name"
        value={shoe.name}
        onChange={(e) => setShoe({ ...shoe, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={shoe.price}
        onChange={(e) => setShoe({ ...shoe, price: e.target.value })}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
