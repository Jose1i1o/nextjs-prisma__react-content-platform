import { useState, useEffect, useCallback } from "react";
import { useCategory } from "./useCategory";
import { useModuleStore } from "../context/store";

export const useFetchModules = () => {
  
  const { currentModule, setCurrentModule } = useModuleStore();
  
  const [isLoading, setIsLoading] = useState(false);
  const category = useCategory();

  const fetchModules = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/modules?category=${category}`);
      const data = await response.json();
      setCurrentModule(data);
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
    setIsLoading(false);
  }, [category]);

  useEffect(() => {
    if (category) {
      fetchModules();
    }
  }, [category, fetchModules]);

  return { isLoading, currentModule };
};