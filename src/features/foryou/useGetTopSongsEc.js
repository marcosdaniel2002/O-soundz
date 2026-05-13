import { useQuery } from "@tanstack/react-query";
import { getTopGlobalPlaylistEcuador } from "../../services/apiSpotify";

export function useGetTopSongsEc() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["top-songs-ec"],
    queryFn: getTopGlobalPlaylistEcuador,
  });
  return { isLoading, data, error };
}
