import { useQuery } from "@tanstack/react-query";
import { getTopGlobalPlaylist } from "../../services/apiSpotify";

export function useGetTopSongs() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["top-songs"],
    queryFn: getTopGlobalPlaylist,
  });
  return { isLoading, data, error };
}
