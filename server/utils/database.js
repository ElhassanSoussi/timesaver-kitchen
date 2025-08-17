import fs from 'fs/promises';
import path from 'path';

const dataPath = path.resolve('data/products.json');

export async function readProducts() {
  const raw = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(raw);
}
