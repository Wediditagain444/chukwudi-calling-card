import { Details } from '@/components/calling-card/details'
import { Identity } from '@/components/calling-card/identity'

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center px-4 py-10 sm:px-6 md:py-16">
      <article className="w-full max-w-4xl rounded-3xl border bg-background/60 p-6 shadow-[0_1px_0_rgba(0,0,0,0.02),0_24px_48px_-24px_rgba(20,30,60,0.18)] sm:p-10 md:p-14">
        <Identity />
        <hr className="my-10" />
        <Details />
        <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
          <span>Lehman College</span>
          <span>Business Administration</span>
        </footer>
      </article>
    </main>
  )
}
