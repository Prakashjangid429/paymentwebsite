import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface AgendaItem {
  time: string
  title: string
  speaker?: string
  location?: string
  description?: string
}

interface EventAgendaProps {
  agenda: AgendaItem[]
}

export function EventAgenda({ agenda }: EventAgendaProps) {
  if (!agenda || agenda.length === 0) {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Event Agenda</h3>
        <p className="text-muted-foreground">Agenda details will be available soon.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Event Agenda</h3>
      <div className="space-y-4">
        {agenda.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium">{item.time}</div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  {item.speaker && <p className="text-primary font-medium mb-2">Speaker: {item.speaker}</p>}
                  {item.location && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>
                  )}
                  {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
