import { useEffect } from "react";
import { useUser } from "./UserContext";
import { Link } from "react-router-dom";

export default function ShoesPage() {
  const { user, shoes, fetchShoes, deleteShoe, addToCart } = useUser();

  useEffect(() => {
    fetchShoes();
  }, [fetchShoes]);

  return (
    <div>
      <h1>Shoes</h1>
      {user?.role === "admin" && (
        <Link to="/shoes/add">
          <button>Add Shoe</button>
        </Link>
      )}
      <div>
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            style={{ border: "1px solid #ccc", margin: "10px" }}
          >
            <h3>{shoe.name}</h3>
            <p>${shoe.price}</p>
            {user?.role === "admin" ? (
              <>
                <Link to={`/shoes/${shoe.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteShoe(shoe.id)}>Delete</button>
              </>
            ) : (
              <button onClick={() => addToCart(shoe)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
