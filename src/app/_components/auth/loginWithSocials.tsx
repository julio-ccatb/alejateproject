"use client";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import { signIn } from "next-auth/react";

const LogInWithSocials = () => {
  return (
    <>
      <Button onClick={() => signIn("google")} variant="secondary" className="">
        <Chrome /> Inicia con Google
      </Button>
    </>
  );
};

export default LogInWithSocials;
