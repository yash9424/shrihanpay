import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-4xl font-bold text-foreground">Service Not Found</h1>
        <p className="text-muted-foreground">The service you're looking for doesn't exist.</p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
