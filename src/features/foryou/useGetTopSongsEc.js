import { useQuery } from "@tanstack/react-query";
import { getTopGlobalPlaylistEcuador } from "../../services/apiSpotify";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

export function useGetTopSongsEc() {
  const [apiKey, setApiKey] = useLocalStorageState(null, "spotify-key");

  const { isLoading, data, error } = useQuery({
    queryKey: ["top-songs-ec", apiKey],
    queryFn: () => getTopGlobalPlaylistEcuador(apiKey, setApiKey),
  });
  return { isLoading, data, error };
}
