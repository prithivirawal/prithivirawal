import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 py-24 px-10 text-center sm:text-left sm:items-start">
        
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Hi, I'm Prithivi 👋
        </h1>

        <p className="max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          I'm an <span className="font-medium">AI student at Coventry University</span> who loves 
          building simple, impactful apps that make life easier for people.  
          A minimal portfolio page — more coming soon.
        </p>

        <div className="mt-6 h-px w-20 bg-zinc-300 dark:bg-zinc-700"></div>

        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Prithivi Rawal
        </p>

      </main>
    </div>
  );
}
