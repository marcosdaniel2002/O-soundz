import { useQuery } from "@tanstack/react-query";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { getSongSearch } from "../../services/apiSpotify";
import { useSearchParams } from "react-router-dom";

export function useGetSongSearch() {
  const [params] = useSearchParams();
  const query = params.get("song");

  if (!query) return;

  const [apiKey, setApiKey] = useLocalStorageState(null, "spotify-key");

  const { isLoading, data, error } = useQuery({
    queryKey: ["search-songs", apiKey],
    queryFn: () => getSongSearch(apiKey, setApiKey, query),
  });

  return { isLoading, data, error };
}
