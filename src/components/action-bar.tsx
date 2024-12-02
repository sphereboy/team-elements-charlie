import { Button } from '@/components/ui/button'
import { MessageSquare, Users, BarChart2, Brain, TrendingUp, Zap, Activity } from 'lucide-react'

export function ActionBar() {
  return (
    <div className="flex justify-center gap-2 p-4 bg-muted rounded-lg">
      <Button variant="ghost" size="icon">
        <MessageSquare className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Users className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <BarChart2 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Brain className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <TrendingUp className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Zap className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Activity className="h-4 w-4" />
      </Button>
    </div>
  )
}

