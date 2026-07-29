"use client";

import { useMemo, useState } from "react";
import type { ProjectItem } from "@/constants/projects";

const ALL_CATEGORY = "All";

export function useProjectCategoryFilter(projects: ProjectItem[]) {
  const categories = useMemo(
    () => [ALL_CATEGORY, ...new Set(projects.map((p) => p.category))],
    [projects],
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);

  const visibleProjects = useMemo(
    () =>
      selectedCategory === ALL_CATEGORY
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [projects, selectedCategory],
  );

  return { categories, selectedCategory, setSelectedCategory, visibleProjects };
}
