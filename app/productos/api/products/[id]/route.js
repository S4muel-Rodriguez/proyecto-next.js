import { db } from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    const productsRef = collection(db, 'products');
    const productsSnapshot = await getDocs(productsRef);
    const products = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching products' }), { status: 500 });
  }
}
