const ITUNES = "https://itunes.apple.com";

function mapTrack(track) {
  return {
    id: String(track.trackId),
    name: track.trackName,
    artist: track.artistName,
    image: track.artworkUrl100.replace("100x100bb", "600x600bb"),
    track: track.previewUrl,
  };
}

export async function getTopGlobalPlaylist() {
  const res = await fetch(
    `${ITUNES}/search?term=top+pop+hits&media=music&entity=song&limit=50`,
  );
  if (!res.ok) throw new Error("Failed to fetch top songs");
  const data = await res.json();
  const tracks = data.results
    .filter((t) => t.previewUrl && t.trackId)
    .map(mapTrack);
  return { id: "itunes-global", tracks };
}

export async function getTopGlobalPlaylistEcuador() {
  const res = await fetch(
    `${ITUNES}/search?term=reggaeton+latin&media=music&entity=song&limit=50`,
  );
  if (!res.ok) throw new Error("Failed to fetch songs");
  const data = await res.json();
  const tracks = data.results
    .filter((t) => t.previewUrl && t.trackId)
    .map(mapTrack);
  return { id: "itunes-latin", tracks };
}

export async function getSongSearch(query) {
  if (!query) return null;
  const res = await fetch(
    `${ITUNES}/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=10`,
  );
  if (!res.ok) throw new Error("Failed to search");
  const data = await res.json();
  const tracks = data.results
    .filter((t) => t.previewUrl && t.trackId)
    .map(mapTrack);
  return { id: query, tracks };
}
