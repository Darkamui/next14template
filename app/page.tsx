import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    // Content wrapper
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {/* Text container */}
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          NextJS 14 Template <br className="hidden sm:inline" />
          w/ ShadCN UI Components
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground"></p>
      </div>
      {/* Button container */}
      <div className="flex gap-4">
        <Link
          href="/"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}>
          Buy
        </Link>

        <Link
          href="/"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline" })}>
          Sell
        </Link>
        <ThemeToggle />
      </div>
    </main>
  );
}
