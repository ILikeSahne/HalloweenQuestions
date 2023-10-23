import Image from 'next/image'
import './index.css'
import Cart from './Cart'
import { sql } from '@vercel/postgres';

export default async function Home() {
  const { rows } = await sql`SELECT * from questions`;

  return (
    <main style={{ display: "flex", alignItems: "center", justifyContent: "center", height: '100vh', width: '100vw',
                   backgroundColor: 'darkorange', color: "black", fontFamily: "Halloween Spooky"}}>
      <Cart rows={rows}/>
    </main>
  )
}
