import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL + '/api/products'
      );
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Timesaver Kitchen</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} – ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
