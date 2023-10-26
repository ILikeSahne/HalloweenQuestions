import { use } from "react";
import Questions from "../components/Questions";
import prisma from "../app/database/Prisma";
import ITableQuestions from "@/app/database/IQuestions";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import SetupWrapper from "@/components/SetupWrapper";

export async function getServerSideProps() {
    const questions = await prisma.questions.findMany();

    return {
        props: { questions: questions }
    };
}

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