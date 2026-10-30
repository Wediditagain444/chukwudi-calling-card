import { BriefcaseBusiness, CalendarRange, HeartHandshake, Music, Target } from 'lucide-react'

const projects = [
  {
    title: 'Job Search Command Center',
    description: 'A tracker for organizing applications, follow-ups, and progress in one place.',
    icon: Target,
  },
  {
    title: 'Campus Event Budget Planner',
    description: 'A budgeting tool for planning event costs and keeping spending on target.',
    icon: CalendarRange,
  },
]

const roles = [
  { title: 'Home Health Care', detail: 'Current role', icon: HeartHandshake },
  { title: 'GRAMMY U Ambassador', detail: 'Recording Academy', icon: Music },
]

const skills = ['Organization', 'Excel', 'Customer Relations', 'Data Tracking', 'Budgeting', 'Operations']

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
      {children}
    </h2>
  )
}

export function Details() {
  return (
    <div className="grid gap-10 md:grid-cols-5">
      <section className="flex flex-col gap-4 md:col-span-3" aria-labelledby="projects-heading">
        <SectionLabel>
          <span id="projects-heading">Practical projects</span>
        </SectionLabel>
        <ul className="flex flex-col gap-3">
          {projects.map(({ title, description, icon: Icon }) => (
            <li key={title} className="flex gap-4 rounded-xl border bg-card p-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-col gap-10 md:col-span-2">
        <section className="flex flex-col gap-4" aria-labelledby="roles-heading">
          <SectionLabel>
            <span id="roles-heading">Beyond the classroom</span>
          </SectionLabel>
          <ul className="flex flex-col divide-y rounded-xl border bg-card">
            {roles.map(({ title, detail, icon: Icon }) => (
              <li key={title} className="flex items-center gap-3 p-4">
                <Icon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{title}</span>
                  <span className="text-xs text-muted-foreground">{detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4" aria-labelledby="skills-heading">
          <SectionLabel>
            <span id="skills-heading">Strengths</span>
          </SectionLabel>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="rounded-full border bg-card px-3 py-1 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section
        className="flex flex-col gap-3 rounded-2xl bg-primary p-6 text-primary-foreground md:col-span-5 md:flex-row md:items-center md:gap-6 md:p-8"
        aria-labelledby="seeking-heading"
      >
        <BriefcaseBusiness className="size-6 shrink-0 text-accent" aria-hidden="true" />
        <div className="flex flex-col gap-1">
          <h2 id="seeking-heading" className="font-serif text-2xl">
            Looking for remote opportunities
          </h2>
          <p className="leading-relaxed text-pretty text-primary-foreground/75">
            Where I can apply organization, Excel, and customer relations skills to keep operations running smoothly.
          </p>
        </div>
      </section>
    </div>
  )
}
