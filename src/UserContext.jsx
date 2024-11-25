import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Current user
  const [shoes, setShoes] = useState([]); // Shoes data
  const [cart, setCart] = useState([]); // User's cart

  const shoesCollection = collection(db, "shoes");

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(
        currentUser
          ? {
              ...currentUser,
              role:
                currentUser.email === "admin@example.com" ? "admin" : "user",
            }
          : null
      );
    });
    return () => unsubscribe();
  }, []);

  // Fetch shoes from Firestore
  const fetchShoes = async () => {
    const data = await getDocs(shoesCollection);
    setShoes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // CRUD operations for shoes
  const createShoe = async (shoe) => await addDoc(shoesCollection, shoe);
  const updateShoe = async (id, shoe) =>
    await updateDoc(doc(db, "shoes", id), shoe);
  const deleteShoe = async (id) => await deleteDoc(doc(db, "shoes", id));

  // Cart management
  const addToCart = (shoe) => {
    if (!cart.find((item) => item.id === shoe.id)) setCart([...cart, shoe]);
  };
  const removeFromCart = (shoeId) =>
    setCart(cart.filter((item) => item.id !== shoeId));

  return (
    <UserContext.Provider
      value={{
        user,
        shoes,
        cart,
        fetchShoes,
        createShoe,
        updateShoe,
        deleteShoe,
        addToCart,
        removeFromCart,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
