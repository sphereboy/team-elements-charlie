"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { TeamMember } from "@/types/team";
import { teamMembers as initialTeamMembers } from "@/data/team";
import { roles } from "@/data/roles";

interface TeamContextType {
  members: TeamMember[];
  activeRoleIds: string[];
  addMember: (member: Omit<TeamMember, "id">) => void;
  editMember: (member: TeamMember) => void;
  deleteMember: (id: string) => void;
  resetToDefault: () => void;
  toggleRole: (roleId: string) => void;
  isLoading: boolean;
  error: string | null;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({ children }: { children: ReactNode }) {
  const [members, setMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [activeRoleIds, setActiveRoleIds] = useState<string[]>(() => {
    // Initialize with the roles of existing team members
    const memberRoleIds = new Set(
      members
        .map((member) => {
          const role = roles.find((r) => r.title === member.role);
          return role?.id;
        })
        .filter((id): id is string => id !== undefined)
    );
    return Array.from(memberRoleIds);
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration and localStorage
  useEffect(() => {
    setIsHydrated(true);
    try {
      const savedMembers = localStorage.getItem("teamMembers");
      const savedRoles = localStorage.getItem("activeRoleIds");

      if (savedMembers) {
        setMembers(JSON.parse(savedMembers));
      }
      if (savedRoles) {
        setActiveRoleIds(JSON.parse(savedRoles));
      }
    } catch (err) {
      setError("Failed to load saved data");
      console.error("Error loading data:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (!isHydrated) return;

    try {
      localStorage.setItem("teamMembers", JSON.stringify(members));
      localStorage.setItem("activeRoleIds", JSON.stringify(activeRoleIds));
    } catch (err) {
      setError("Failed to save data");
      console.error("Error saving data:", err);
    }
  }, [members, activeRoleIds, isHydrated]);

  const addMember = (newMember: Omit<TeamMember, "id">) => {
    try {
      const id = (
        Math.max(...members.map((m) => parseInt(m.id)), 0) + 1
      ).toString();
      setMembers([...members, { ...newMember, id }]);

      // Add the role to active roles if not already active
      const role = roles.find((r) => r.title === newMember.role);
      if (role && !activeRoleIds.includes(role.id)) {
        setActiveRoleIds([...activeRoleIds, role.id]);
      }

      setError(null);
    } catch (err) {
      setError("Failed to add team member");
      console.error("Error adding team member:", err);
    }
  };

  const editMember = (updatedMember: TeamMember) => {
    try {
      setMembers(
        members.map((member) =>
          member.id === updatedMember.id ? updatedMember : member
        )
      );

      // Add the new role to active roles if not already active
      const role = roles.find((r) => r.title === updatedMember.role);
      if (role && !activeRoleIds.includes(role.id)) {
        setActiveRoleIds([...activeRoleIds, role.id]);
      }

      setError(null);
    } catch (err) {
      setError("Failed to update team member");
      console.error("Error updating team member:", err);
    }
  };

  const deleteMember = (id: string) => {
    try {
      setMembers(members.filter((member) => member.id !== id));
      setError(null);
    } catch (err) {
      setError("Failed to delete team member");
      console.error("Error deleting team member:", err);
    }
  };

  const resetToDefault = () => {
    try {
      setMembers(initialTeamMembers);
      // Reset active roles to those used by default members
      const defaultRoleIds = new Set(
        initialTeamMembers
          .map((member) => {
            const role = roles.find((r) => r.title === member.role);
            return role?.id;
          })
          .filter((id): id is string => id !== undefined)
      );
      setActiveRoleIds(Array.from(defaultRoleIds));
      setError(null);
    } catch (err) {
      setError("Failed to reset team members");
      console.error("Error resetting team members:", err);
    }
  };

  const toggleRole = (roleId: string) => {
    try {
      if (activeRoleIds.includes(roleId)) {
        // Check if role is in use by any team member
        const roleInUse = members.some((member) => {
          const memberRole = roles.find((r) => r.title === member.role);
          return memberRole?.id === roleId;
        });

        if (roleInUse) {
          setError("Cannot deactivate role that is in use by team members");
          return;
        }

        setActiveRoleIds(activeRoleIds.filter((id) => id !== roleId));
      } else {
        setActiveRoleIds([...activeRoleIds, roleId]);
      }
      setError(null);
    } catch (err) {
      setError("Failed to toggle role");
      console.error("Error toggling role:", err);
    }
  };

  // Don't render children until hydration is complete
  if (!isHydrated) {
    return null;
  }

  return (
    <TeamContext.Provider
      value={{
        members,
        activeRoleIds,
        addMember,
        editMember,
        deleteMember,
        resetToDefault,
        toggleRole,
        isLoading,
        error,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
}
