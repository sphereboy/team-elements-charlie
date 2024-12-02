'use client'

import { useState } from 'react'
import { TeamMember } from '@/types/team'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { MemberCard } from './member-card'
import { MemberDetail } from './member-detail'

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 p-4">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onClick={() => setSelectedMember(member)}
          />
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="border-dashed hover:border-primary transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="aspect-square flex flex-col items-center justify-center text-center space-y-2">
                <Plus className="h-8 w-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Add Member</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <MemberDetail
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  )
}

