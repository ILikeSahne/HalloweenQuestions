'use client'

import { useState } from "react";
import ITableQuestions from "../app/database/IQuestions";
import { download, generateCsv, mkConfig } from "export-to-csv";

interface IQuestions {
  questions: ITableQuestions[]
}

export default function Questions({questions} : IQuestions) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", width: '100%', height: '100%'}} >
      <button style={{ fontSize: '50px', visibility: currentQuestion !== 0 ? 'visible' : 'hidden'  }} onClick={() => setCurrentQuestion(q => q - 1)}>Prev</button>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
                    fontWeight: "bold", fontFamily: "Halloween Spooky", textAlign: "center" }}>
        <div style={{ display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
          <p style={{ fontSize: '120px', margin: '0px' }}>{questions[currentQuestion].question}</p>
          <p style={{ fontSize: '60px', margin: '0px', opacity: "60%" }}>Frage geht an: {questions[currentQuestion].goes_to}</p>
        </div>
      </div>

      <button style={{ fontSize: '50px', visibility: currentQuestion !== questions.length - 1 ? 'visible' : 'hidden' }} onClick={() => setCurrentQuestion(q => q + 1)}>Next</button>

      <button style={{ fontSize: '50px' }} onClick={() => {
        const csvConfig = mkConfig({ useKeysAsHeaders: true, filename: "AlleFragen" });

        const data : any[] = [
          
        ]

        questions.forEach(question => {
          data.push({
            "Frage": question.question,
            "Geht an": question.goes_to
          })
        });

        const csv = generateCsv(csvConfig)(data);

        download(csvConfig)(csv)
      }}>Export Questions</button>
    </div>
  );
}