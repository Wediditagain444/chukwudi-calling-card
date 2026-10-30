export function Identity() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-11 items-center justify-center rounded-full bg-primary font-serif text-lg text-primary-foreground"
        >
          CN
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Open to remote opportunities
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
          Chukwudi <span className="italic text-accent">Nwachukwu</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
          Business Administration student at Lehman College, focused on{' '}
          <span className="font-medium text-foreground">operations</span>,{' '}
          <span className="font-medium text-foreground">data tracking</span>, and{' '}
          <span className="font-medium text-foreground">customer service</span>.
        </p>
      </div>
    </header>
  )
}
