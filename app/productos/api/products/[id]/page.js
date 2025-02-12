// app/products/[id]/page.js
import { db } from '@/utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function generateStaticParams() {
  const products = await fetch('/api/products').then(res => res.json());
  return products.map(product => ({ id: product.id }));
}

export default async function ProductPage({ params }) {
  const product = await fetchProductById(params.id); // Crear función para obtener producto por ID
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
    </div>
  );
}

async function fetchProductById(id) {
  const res = await fetch(`/api/products/${id}`);
  return res.json();
}



// app/products/[id]/page.js
export async function generateStaticParams() {
  const products = await fetch('https://your-firebase-api/products').then((res) => res.json());
  return products.map((product) => ({ id: product.id.toString() }));
}

export default async function ProductDetail({ params }) {
  const { id } = params;
  const product = await fetch(`https://your-firebase-api/products/${id}`).then((res) => res.json());

  if (!product) return notFound();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}


import Head from "next/head";

export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>{product.name} - Tienda Nike</title>
        <meta
          name="description"
          content={`Compra ${product.name} a solo ${product.price}.`}
        />
      </Head>
      <div>
        <h1>{product.name}</h1>
        <p>Precio: ${product.price}</p>
        <img src={product.image} alt={product.name} />
      </div>
    </>
  );
}
