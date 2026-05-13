import { useQuery } from "@tanstack/react-query";
import { getSongSearch } from "../../services/apiSpotify";
import { useSearchParams } from "react-router-dom";

export function useGetSongSearch() {
  const [params] = useSearchParams();
  const query = params.get("song");

  const { isLoading, data, error } = useQuery({
    queryKey: ["search-songs", query],
    queryFn: () => getSongSearch(query),
  });

  return { isLoading, data, error };
}
