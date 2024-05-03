'use client';

import {VButton} from "@/components/ui/VButton/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <VButton onClick={() => console.log("HELLo")}>Click me</VButton>
    </main>
  );
}
