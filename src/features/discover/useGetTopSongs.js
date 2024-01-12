import { useQuery } from "@tanstack/react-query";
import { getTopGlobalPlaylist } from "../../services/apiSpotify";
import { useApiKey } from "../../context/ApiKeyContext";

export function useGetTopSongs() {
  const { apiKey, getKey, isLoading: isLoadingKey } = useApiKey();
  if (!apiKey) getKey().then();
  const { isLoading, data, error } = useQuery({
    queryKey: ["top-songs"],
    queryFn: () => getTopGlobalPlaylist(apiKey),
  });
  return { isLoading: isLoading || isLoadingKey, data, error };
}
