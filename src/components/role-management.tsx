"use client";

import { useState } from "react";
import { Role, roles as allRoles } from "@/data/roles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Power } from "lucide-react";
import { motion } from "framer-motion";

interface RoleManagementProps {
  activeRoleIds: string[];
  onToggleRole: (roleId: string) => void;
}

export function RoleManagement({
  activeRoleIds,
  onToggleRole,
}: RoleManagementProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(allRoles.map((role) => role.category)));

  // Filter roles based on selected category
  const filteredRoles = selectedCategory
    ? allRoles.filter((role) => role.category === selectedCategory)
    : allRoles;

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredRoles.map((role) => {
          const isActive = activeRoleIds.includes(role.id);
          return (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className={`relative group cursor-pointer transition-colors ${
                  isActive ? "border-primary" : "hover:border-primary/50"
                }`}
                style={{
                  backgroundColor: isActive ? role.backgroundColor : undefined,
                }}
                onClick={() => onToggleRole(role.id)}
              >
                <CardContent className="p-4">
                  <div className="absolute top-2 right-2">
                    <Power
                      className={`h-4 w-4 transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground/40"
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-mono font-bold text-center">
                      {role.symbol}
                    </div>
                    <div className="text-sm font-medium text-center truncate">
                      {role.title}
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      {role.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
