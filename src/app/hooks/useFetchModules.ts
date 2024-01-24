import { useState, useEffect, useCallback } from "react";
import { useCategory } from "./useCategory";
import { useUserStore, useModuleStore } from "../context/store";
import ObjectId from "bson-objectid";

export const useFetchModules = () => {  
  const { currentModule, setCurrentModule } = useModuleStore();
  const { currentUser } = useUserStore();
  const category = useCategory();  

  const defaultUserIdHex = '000000000000000000000000';
  const defaultUserId = new ObjectId(defaultUserIdHex);
  const userId = currentUser ? currentUser.id : defaultUserId;

  const [isLoading, setIsLoading] = useState(false);

  const fetchModules = useCallback(async () => {
    if (!category || !userId) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/modules?category=${category}&userId=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch modules");
      }

      const data = await response.json();
      setCurrentModule(data);
    } catch (error) {
      console.error("Error fetching modules:", error);
    } finally {
      setIsLoading(false);
    }
  }, [category]);


  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  return { isLoading, currentModule };
};
