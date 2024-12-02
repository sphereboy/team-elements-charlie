import { teamMembers } from "@/data/team";
import { TeamGrid } from "@/components/team-grid";
import { ActionBar } from "@/components/action-bar";

export default function TeamViewer() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Team Periodic Table
        </h1>
        <p className="text-muted-foreground">
          View your team members as elements - the building blocks of your
          company.
        </p>
      </div>
      <TeamGrid members={teamMembers} />
      <ActionBar />
    </div>
  );
}
