const client_id = "fce12d1069294c4880302946c939cb82";
const client_secret = "9145423eb7404d88b6ff219c1974590f";

export async function getApiKey() {
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
    });
    if (!res.ok) throw Error("Something went wrong with Api Key request!");
    const data = await res.json();
    return data.access_token;
  } catch (err) {
    console.error(err);
  }
}

export async function getTopGlobalPlaylist(apiKey) {
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );
    console.log(res);

    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
}
