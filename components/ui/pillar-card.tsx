import type React from "react"
interface PillarCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function PillarCard({ icon, title, description }: PillarCardProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-heading font-bold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
