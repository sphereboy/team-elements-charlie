"use client";

import { useState } from "react";
import { TeamMember } from "@/types/team";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EditMemberDialog } from "./edit-member-dialog";
import { Pencil } from "lucide-react";

interface MemberDetailProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (updatedMember: TeamMember) => void;
}

export function MemberDetail({
  member,
  isOpen,
  onClose,
  onEdit,
}: MemberDetailProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  if (!member) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold">
                {member.name}
              </DialogTitle>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsEditDialogOpen(true)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-mono font-bold">
                {member.symbol}
              </div>
              <div className="text-2xl text-muted-foreground">
                #{member.atomicNumber}
              </div>
            </div>
            <div>
              <div className="font-medium">{member.role}</div>
              <div className="text-sm text-muted-foreground">
                {member.email}
              </div>
            </div>
            <div className="text-sm">
              <span className="inline-block px-2 py-1 rounded-full bg-muted">
                {member.category}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {isEditDialogOpen && (
        <EditMemberDialog
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          onSave={(updatedMember) => {
            onEdit(updatedMember);
            setIsEditDialogOpen(false);
          }}
          member={member}
        />
      )}
    </>
  );
}
