"use client";

import { TeamGrid } from "@/components/team-grid";
import { ActionBar } from "@/components/action-bar";
import { useTeam } from "@/context/team-context";
import { Button } from "@/components/ui/button";
import { RotateCcw, AlertCircle, Settings2 } from "lucide-react";
import Link from "next/link";

export default function TeamViewer() {
  const { members, addMember, editMember, resetToDefault, isLoading, error } =
    useTeam();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Team Periodic Table
          </h1>
          <p className="text-muted-foreground">
            View your team members as elements - the building blocks of your
            company.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/roles">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Settings2 className="h-4 w-4" />
              Manage Roles
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={resetToDefault}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset to Default
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-destructive/10 text-destructive rounded-lg p-4 flex items-center gap-2 mb-6">
          <AlertCircle className="h-4 w-4" />
          <p>{error}</p>
        </div>
      )}

      <div className="bg-card rounded-lg shadow-sm border">
        <TeamGrid
          members={members}
          onAddMember={addMember}
          onEditMember={editMember}
        />
        <ActionBar />
      </div>
    </div>
  );
}
