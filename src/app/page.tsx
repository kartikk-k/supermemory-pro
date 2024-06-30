import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {

  redirect('/home');
  
  return (
    <main className="bg-background h-screen">

    </main>
  );
}
