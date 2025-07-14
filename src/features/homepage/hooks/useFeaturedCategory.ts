import { api } from "@/trpc";

export default function useFeaturedCategory() {
  const { data,error, isLoading } = api.category.featured.useQuery({
    filter: "WKWKWKW",
  });

  return {
    data,
    isLoading,
    error
  };
}
