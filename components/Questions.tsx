'use client'

import { useState } from "react";
import ITableQuestions from "../app/database/IQuestions";
import { download, generateCsv, mkConfig } from "export-to-csv";

interface IQuestions {
  questions: ITableQuestions[]
}

export default function Questions({questions} : IQuestions) {
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: '16px'}} >
      {questions.map((question, i) => {
        return (
          <div key={question.id} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", pageBreakAfter: i % 5 == 4 ? 'always' : "auto" }}>
            <p style={{ fontSize: "40px", margin: "0", textAlign: "center" }}>{question.question}</p>
            <p style={{ fontSize: "25px", opacity: '0.5', margin: "0px 0px 60px 0px" }}>Geht an {question.goes_to}</p>
          </div>
        );
      })}
    </div>
  );
}