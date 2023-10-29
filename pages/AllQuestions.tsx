import { use } from "react";
import Questions from "../components/Questions";
import prisma from "../app/database/Prisma";
import ITableQuestions from "@/app/database/IQuestions";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import "../styles/SetupWrapper.css"

export async function getServerSideProps() {
    const questions = shuffle(await prisma.questions.findMany());

    return {
        props: { questions: questions }
    };
}

function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};

export default function AllQuestionsPage({
    questions
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "black",
            fontFamily: "Halloween Spooky"}}>
            <Questions questions={questions} />
        </div>
    );
}