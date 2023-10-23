"use-client"

import prisma from "@/app/database/Prisma";
import SetupWrapper from "@/components/SetupWrapper";
import { FormEvent, useState } from "react";
import "../styles/AskQuestion.css";

export default function AskQuestionPage() {
  const [question, setQuestion] = useState<string>("");
  const [goesTo, setGoesTo] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);

  const [response, setResponse] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setResponse("Frage wurde hinzugefügt");
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    
    setQuestion("");
    setGoesTo("");

    const response = await fetch("/api/CreateQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: question, goes_to: goesTo }),
    });
  }
  
  return (
    <SetupWrapper>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: '30px', width: '100%', height: '100%', maxWidth: '800px', gap: '16px', textAlign: "center" }}>
        <label htmlFor="question">Welche Assozialle Frage willst du stellen?</label>
        <input style={{ fontSize: '30px', fontFamily: 'Halloween Spooky', backgroundColor: "black", border: "0px solid", borderRadius: "8px", textAlign: "center", width: '100%', color: "white", marginBottom: "0px"}}
            type="text"
            id="question"
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

        <label htmlFor="goes_to" style={{ marginTop: "32px" }}>An wen möchtest du die Frage stellen?</label>
        <input style={{ fontSize: '30px', fontFamily: 'Halloween Spooky', backgroundColor: "black", border: "0px solid", borderRadius: "8px", textAlign: "center", width: '100%', color: "white" }}
            type="text"
            id="goes_to"
            value={goesTo}
            onChange={(e) => setGoesTo(e.target.value)}
          />

        <input type="submit" value="Submit" style={{ fontSize: '50px', fontFamily: 'Halloween Spooky', border: "0px solid", padding: "12px 12px 0px 12px", margin: '0', borderRadius: '8px'}}></input>
      
        <p className={"fade"} style={{ opacity: isVisible ? '100%' : '0%' }}>{response}</p>
      </form>
    </SetupWrapper>
  );
}
