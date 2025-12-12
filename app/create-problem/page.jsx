import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import CreateProblemForm from "@/modules/problems/components/create-problem-form";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateProblemPage = async () => {
  const user = await currentUser();
  return (
    <section className="container mx-auto min-h-screen py-4 flex flex-col">
      <div className="flex justify-between items-center w-full">
        <Link href={"/"}>
          <Button variant={"outline"} size={"icon"}>
            <ArrowLeft className="size-4" />
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-amber-400">
          Welcome {user?.firstName}! Create a Problem
        </h1>
        <ModeToggle />
      </div>
      <CreateProblemForm />
    </section>
  );
};

export default CreateProblemPage;
