import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ChatWidget() {
  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  )
}
