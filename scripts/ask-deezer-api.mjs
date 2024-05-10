import fs from "fs";
import fetch from "node-fetch";

async function getMusic(song_title) {
  let _url = `https://api.deezer.com/search/?q=${song_title}&index=0&limit=2&output=json`;

  let response = await fetch(encodeURI(_url));
  console.log(response);
  let response_json = await response.json();

  const data = response_json.data[0];
  let song = {
    title: data.title,
    preview: data.preview,
    artist: data.artist.name,
    album_cover: data.album.cover_medium,
  };

  return song;
}

async function getAllSOngs() {
  let songArray = [];
  songArray.push(await getMusic("In the End Linkin Park "));
  songArray.push(await getMusic("JVKE Golden hour"));
  songArray.push(await getMusic("夜に駆ける"));
  songArray.push(await getMusic("Lily Allen Somewhere Only We Know"));
  songArray.push(await getMusic("Circles Post Malone"));
  songArray.push(await getMusic("si seul snorunt"));
  return songArray;
}

getAllSOngs().then((array) => {
  let jsonContent = JSON.stringify(array);
  fs.writeFile(
    "src/assets/json/songs.json",
    jsonContent,
    "utf8",
    function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }

      console.log("JSON file has been saved.");
    },
  );
});
