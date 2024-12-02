"use client";

import { useState } from "react";
import { TeamMember } from "@/types/team";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { MemberCard } from "./member-card";
import { MemberDetail } from "./member-detail";
import { AddMemberDialog } from "./add-member-dialog";

interface TeamGridProps {
  members: TeamMember[];
  onAddMember: (member: Omit<TeamMember, "id">) => void;
  onEditMember: (member: TeamMember) => void;
}

export function TeamGrid({
  members,
  onAddMember,
  onEditMember,
}: TeamGridProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const nextAtomicNumber =
    Math.max(...members.map((m) => m.atomicNumber), 0) + 1;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 p-4">
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
          onClick={() => setIsAddDialogOpen(true)}
        >
          <Card className="border-dashed hover:border-primary transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="aspect-square flex flex-col items-center justify-center text-center space-y-2">
                <Plus className="h-8 w-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Add Member
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <MemberDetail
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        onEdit={(updatedMember) => {
          onEditMember(updatedMember);
          setSelectedMember(updatedMember);
        }}
      />
      <AddMemberDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onAdd={onAddMember}
        nextAtomicNumber={nextAtomicNumber}
      />
    </>
  );
}
