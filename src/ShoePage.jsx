import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

export default function ShoePage() {
  const { shoeId } = useParams();
  const { shoes, updateShoe } = useUser();
  const [shoe, setShoe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedShoe = shoes.find((s) => s.id === shoeId);
    setShoe(selectedShoe);
  }, [shoes, shoeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateShoe(shoe.id, shoe);
    navigate("/shoes");
  };

  if (!shoe) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Shoe</h1>
      <input
        type="text"
        value={shoe.name}
        onChange={(e) => setShoe({ ...shoe, name: e.target.value })}
        required
      />
      <input
        type="number"
        value={shoe.price}
        onChange={(e) => setShoe({ ...shoe, price: e.target.value })}
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
}
