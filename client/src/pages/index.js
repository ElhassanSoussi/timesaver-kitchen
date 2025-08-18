// client/src/pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function go() {
      const base = process.env.NEXT_PUBLIC_API_BASE_URL;
      const res = await fetch(`${base}/api/products`);
      const data = await res.json();
      setProducts(data);
    }
    go();
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, Arial' }}>
      <h1>Timesaver Kitchen</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(p => (
          <li key={p.id} style={{ margin: '16px 0', borderBottom: '1px solid #eee', paddingBottom: 12 }}>
            <div style={{ fontWeight: 700 }}>{p.name}</div>
            <div>${p.price.toFixed(2)}</div>
            {p.images?.[0] && (
              <img src={p.images[0]} alt={p.name} style={{ width: 320, height: 'auto', marginTop: 8 }} />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
