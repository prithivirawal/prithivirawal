export default function AboutPage() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex w-full max-w-2xl flex-col items-center gap-8 py-24 px-10 text-center sm:text-left sm:items-start">
  
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            About Me
          </h1>
  
          <p className="max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            I'm Prithivi, an AI student passionate about building intuitive,
            practical tools that simplify everyday tasks. I enjoy working on
            minimal, clean designs and learning new technologies along the way.
          </p>
  
          <p className="max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            This page is a work in progress — I'll be adding my projects,
            skills, and more details soon.
          </p>
  
          <a
            href="/"
            className="mt-4 rounded-md bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300"
          >
            Back Home
          </a>
  
        </main>
      </div>
    );
  }
  