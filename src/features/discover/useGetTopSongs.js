import { useQuery } from "@tanstack/react-query";
import { getTopGlobalPlaylist } from "../../services/apiSpotify";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

export function useGetTopSongs() {
  const [apiKey, setApiKey] = useLocalStorageState(null, "spotify-key");
  //   const { apiKey, getKey, isLoading: isLoadingKey } = useApiKey();
  //   if (!apiKey) getKey().then();
  const { isLoading, data, error } = useQuery({
    queryKey: ["top-songs", apiKey],
    queryFn: () => getTopGlobalPlaylist(apiKey, setApiKey),
  });
  return { isLoading, data, error };
}
