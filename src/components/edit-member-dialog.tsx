"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TeamMember } from "@/types/team";
import { roles } from "@/data/roles";

interface EditMemberDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: TeamMember) => void;
  member: TeamMember;
}

export function EditMemberDialog({
  isOpen,
  onClose,
  onSave,
  member,
}: EditMemberDialogProps) {
  const [formData, setFormData] = useState({
    name: member.name,
    email: member.email,
    roleId: "",
  });

  // Find the role ID based on the member's current role title
  useEffect(() => {
    const currentRole = roles.find((r) => r.title === member.role);
    setFormData({
      name: member.name,
      email: member.email,
      roleId: currentRole?.id || "",
    });
  }, [member]);

  const selectedRole = roles.find((r) => r.id === formData.roleId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;

    const updatedMember: TeamMember = {
      ...member,
      name: formData.name,
      email: formData.email,
      role: selectedRole.title,
      symbol: selectedRole.symbol,
      category: selectedRole.category,
      backgroundColor: selectedRole.backgroundColor,
    };
    onSave(updatedMember);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Team Member</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>
            <select
              required
              className="w-full p-2 border rounded-md"
              value={formData.roleId}
              onChange={(e) =>
                setFormData({ ...formData, roleId: e.target.value })
              }
            >
              <option value="">Select a role...</option>
              {Object.entries(
                roles.reduce((acc, role) => {
                  if (!acc[role.category]) {
                    acc[role.category] = [];
                  }
                  acc[role.category].push(role);
                  return acc;
                }, {} as Record<string, typeof roles>)
              ).map(([category, categoryRoles]) => (
                <optgroup key={category} label={category}>
                  {categoryRoles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.title} ({role.symbol})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded-md"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          {selectedRole && (
            <div className="p-4 bg-muted rounded-lg space-y-2">
              <div className="text-sm font-medium">Selected Role Details:</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Symbol: {selectedRole.symbol}</div>
                <div>Category: {selectedRole.category}</div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
