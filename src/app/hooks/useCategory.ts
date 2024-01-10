import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const useCategory = () => {
  const params = useSearchParams();
  const [category, setCategory] = useState<string | null | undefined>(null);

  useEffect(() => {
    return setCategory(params?.get("category"));
  }, [params]);

  return category;
};