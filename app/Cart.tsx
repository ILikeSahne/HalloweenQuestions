'use client'

import { QueryResultRow, sql } from "@vercel/postgres";
import { useState } from "react";

interface ICart {
  rows: QueryResultRow[]
}

export default function Cart({rows} : ICart) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", width: '100%', height: '100%', padding: '32px' }} >
      <button style={{ fontSize: '50px', visibility: currentQuestion !== 0 ? 'visible' : 'hidden'  }} onClick={() => setCurrentQuestion(q => q - 1)}>Prev</button>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
                    fontSize: '120px', fontWeight: "bold", fontFamily: "Halloween Spooky", textAlign: "center" }}>
        {currentQuestion !== 0 ?
          <p style={{ fontSize: '50px', opacity: "20%" }}>{rows[currentQuestion - 1].question}</p> :
          <p style={{ fontSize: '50px', opacity: "0" }}>Keep this here so size doesnt change</p>
        }
        <p>{rows[currentQuestion].question}</p>
        {currentQuestion !== (rows.length - 1) ?
          <p style={{ fontSize: '50px', opacity: "20%" }}>{rows[currentQuestion + 1].question}</p> :
          <p style={{ fontSize: '50px', opacity: "0" }}>Keep this here so size doesnt change</p>
        }
      </div>

      <button style={{ fontSize: '50px', visibility: currentQuestion !== rows.length - 1 ? 'visible' : 'hidden' }} onClick={() => setCurrentQuestion(q => q + 1)}>Next</button>
    </div>
  );
}