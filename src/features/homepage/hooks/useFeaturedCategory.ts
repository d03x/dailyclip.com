import { trpc } from "@/utils/trpc";

export default function useFeaturedCategory() {
  const { data,error, isLoading } = trpc.category.featured.useQuery({
    filter: "WKWKWKW",
  });

  return {
    data,
    isLoading,
    error
  };
}
