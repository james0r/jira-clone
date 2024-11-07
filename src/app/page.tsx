import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="flex gap-4">
      <Input />
      <Button variant="primary">
        Primary
      </Button>
      <Button variant="secondary">
        Secondary
      </Button>
      <Button variant="destructive">
        Destructive
      </Button>
      <Button variant="muted">
        Muted
      </Button>
      <Button variant="outline" size="xs">
        Outline
      </Button>
      <Button variant="teritary" size="lg">
        Teritary
      </Button>
    </div>
  )
}
