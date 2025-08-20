import { Card, CardContent } from "@/components/ui/card"

interface Speaker {
  name: string
  title: string
  company: string
  bio: string
  image: string
}

interface EventSpeakersProps {
  speakers: Speaker[]
}

export function EventSpeakers({ speakers }: EventSpeakersProps) {
  if (!speakers || speakers.length === 0) {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Featured Speakers</h3>
        <p className="text-muted-foreground">Speaker information will be available soon.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Featured Speakers</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {speakers.map((speaker, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{speaker.name}</h4>
                  <p className="text-primary font-medium">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground mb-2">{speaker.company}</p>
                  <p className="text-sm">{speaker.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
