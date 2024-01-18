import { useState, useEffect, useCallback } from "react";
import { useCategory } from "./useCategory";
import { useUserStore, useModuleStore } from "../context/store";
import ObjectId from "bson-objectid";

export const useFetchModules = () => {
  
  const { currentModule, setCurrentModule } = useModuleStore();
  const { currentUser } = useUserStore(); 
  
  const defaultUserIdHex = '000000000000000000000000';
  const defaultUserId = new ObjectId(defaultUserIdHex);
  // need to use an ObjectId for the default user id
  const userId = currentUser ? currentUser.id : defaultUserId;
  
  const [isLoading, setIsLoading] = useState(false);
  const category = useCategory();

  const fetchModules = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/modules?category=${category}&userId=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
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