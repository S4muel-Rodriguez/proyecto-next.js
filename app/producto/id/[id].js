// pages/product/[id].js
import { useRouter } from 'next/router';
import { db } from '../../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function ProductDetail({ product }) {
  const router = useRouter();
  if (!product) return <p>Cargando producto...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const docRef = doc(db, 'products', params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return { notFound: true };

  return {
    props: { product: { id: docSnap.id, ...docSnap.data() } },
  };
}
