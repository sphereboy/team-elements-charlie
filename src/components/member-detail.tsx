"use client";

import { TeamMember } from "@/types/team";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MemberDetailProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MemberDetail({ member, isOpen, onClose }: MemberDetailProps) {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {member.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-mono font-bold">{member.symbol}</div>
            <div className="text-2xl text-muted-foreground">
              #{member.atomicNumber}
            </div>
          </div>
          <div>
            <div className="font-medium">{member.role}</div>
            <div className="text-sm text-muted-foreground">{member.email}</div>
          </div>
          <div className="text-sm">
            <span className="inline-block px-2 py-1 rounded-full bg-muted">
              {member.category}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
