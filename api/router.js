// api/router.js
import { db } from '../../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const fetchProducts = async () => {
  const productsRef = collection(db, 'products');
  const productsSnapshot = await getDocs(productsRef);
  return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
