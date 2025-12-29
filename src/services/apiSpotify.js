const client_id = "fce12d1069294c4880302946c939cb82";
const client_secret = "9145423eb7404d88b6ff219c1974590f";

export async function getApiKey() {
  try {
    const bodyParams = new URLSearchParams();
    bodyParams.append("grant_type", "client_credentials");
    bodyParams.append("client_id", client_id);
    bodyParams.append("client_secret", client_secret);

    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: bodyParams,
    });

    if (!res.ok) throw Error("Something went wrong with Api Key request!");
    const data = await res.json();
    return data.access_token;
  } catch (err) {
    console.error(err);
  }
}

export async function getTopGlobalPlaylist(apiKey, setApiKey) {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    if (!apiKey || res.status === 401) {
      // api key expired
      const token = await getApiKey();
      setApiKey(token);
    }

    const data = await res.json();

    if (!data.tracks) {
      return { id: "", tracks: [] };
    }
    const tracks = data.tracks.items
      .filter((track) => track.track.preview_url != null)
      .map((track) => {
        return {
          id: track.track.id,
          name: track.track.name,
          artist: track.track.artists.at(0).name,
          image: track.track.album.images.at(0).url,
          track: track.track.preview_url,
        };
      });

    return { id: data.id, tracks };
  } catch (e) {
    console.error(e);
  }
}

export async function getSongSearch(apiKey, setApiKey, query) {
  try {
    if (!query) return null;
    const Query = query.charAt(0).toUpperCase() + query.slice(1);

    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${Query}&type=track&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    if (!apiKey || res.status === 401) {
      // api key expired
      const token = await getApiKey();
      setApiKey(token);
    }

    const data = await res.json();
    console.log("data search", data);
    const dataFilter = data.tracks.items.filter(
      (track) => track.preview_url != null,
    );
    const tracks = dataFilter.map((track) => {
      return {
        id: track.id,
        name: track.name,
        artist: track.artists
          .map((artist, i, array) => {
            if (array.length > 1) {
              if (i === array.length - 2) return artist.name + " & ";
              if (i === array.length - 1) return artist.name;
              else return artist.name + ", ";
            } else {
              return artist.name;
            }
          })
          .join(""),
        image: track.album.images.at(0).url,
        track: track.preview_url,
      };
    });

    return { id: query, tracks };
  } catch (e) {
    console.error(e);
  }
}

export async function getTopGlobalPlaylistEcuador(apiKey, setApiKey) {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/playlists/37i9dQZEVXbJlM6nvL1nD1",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    if (!apiKey || res.status === 401) {
      // api key expired
      const token = await getApiKey();
      setApiKey(token);
    }

    const data = await res.json();

    if (!data.tracks) {
      return { id: "", tracks: [] };
    }
    const tracks = data.tracks.items
      .filter((track) => track.track.preview_url != null)
      .map((track) => {
        return {
          id: track.track.id,
          name: track.track.name,
          artist: track.track.artists.at(0).name,
          image: track.track.album.images.at(0).url,
          track: track.track.preview_url,
        };
      });

    return { id: data.id, tracks };
  } catch (e) {
    console.error(e);
  }
}
