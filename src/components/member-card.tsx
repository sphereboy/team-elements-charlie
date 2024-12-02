"use client";

import { TeamMember } from "@/types/team";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface MemberCardProps {
  member: TeamMember;
  onClick: () => void;
}

export function MemberCard({ member, onClick }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className="cursor-pointer hover:shadow-lg transition-shadow"
        onClick={onClick}
        style={{ backgroundColor: member.backgroundColor || "#fff" }}
      >
        <CardContent className="p-4">
          <div className="aspect-square flex flex-col">
            <div className="text-xs text-right">{member.atomicNumber}</div>
            <div className="text-2xl font-bold text-center my-2">
              {member.symbol}
            </div>
            <div className="text-sm text-center font-medium truncate">
              {member.name}
            </div>
            <div className="text-xs text-center text-muted-foreground truncate">
              {member.role}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
