const URL =
  "https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=cce6efb5c865eafd8753e3803d256c29&format=json";
  
function getMusicData() {
  return fetch(`${URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.topartists.artist)
    .then((artists) =>
      Promise.all(
        artists.map((artist) => {
          const URL = `https://api.deezer.com/search?q='${artist.name}'`;
          return fetch(URL)
            .then((response) => response.json())
            .then((data) => {
              return {
                id: artist.mbid,
                name: artist.name,
                listeners: artist.listeners,
                streamable: artist.streamable,
                image: data.data[0].artist.picture_medium,
              };
            });
        })
      )
    );
}

function getArtistData(artistId){
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${artistId}&api_key=cce6efb5c865eafd8753e3803d256c29&format=json`;
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(async data => {
      const image = await getArtistImage(data.artist.name);

      return {
        mbid: data.artist.mbid,
        name: data.artist.name,
        listeners: data.artist.stats.listeners,
        streamable: data.artist.streamable,
        image,
      }
    });
}


function getArtistImage(artistName){
  const URL = `https://api.deezer.com/search?q='${artist.name}'`;
          return fetch(URL)
            .then((response) => response.json())
            .then((data => data.data[0].artist.picture_medium));
}

export { getMusicData };