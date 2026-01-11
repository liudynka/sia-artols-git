interface ProcessStepProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}

export function ProcessStep({ step, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm">
          {step}
        </div>
        {!isLast && <div className="mt-2 h-full w-px bg-border" />}
      </div>
      <div className="pb-8">
        <h4 className="font-heading font-bold text-foreground">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
