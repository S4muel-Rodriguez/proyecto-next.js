// lib/firebaseCrud.js
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export const addProduct = async (product) => {
  try {
    await addDoc(collection(db, "products"), product);
    console.log("Producto agregado con éxito");
  } catch (error) {
    console.error("Error al agregar producto:", error);
  }
};
