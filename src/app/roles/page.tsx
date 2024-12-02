"use client";

import { RoleManagement } from "@/components/role-management";
import { useTeam } from "@/context/team-context";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RolesPage() {
  const { activeRoleIds, toggleRole, error } = useTeam();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Role Management</h1>
          <p className="text-muted-foreground">
            Activate or deactivate roles available for your organization.
          </p>
        </div>
      </div>

      {error && (
        <div className="bg-destructive/10 text-destructive rounded-lg p-4 flex items-center gap-2 mb-6">
          <AlertCircle className="h-4 w-4" />
          <p>{error}</p>
        </div>
      )}

      <div className="bg-card rounded-lg shadow-sm border p-6">
        <RoleManagement
          activeRoleIds={activeRoleIds}
          onToggleRole={toggleRole}
        />
      </div>
    </div>
  );
}
