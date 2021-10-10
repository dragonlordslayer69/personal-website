//http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=jensenzhng&limit=1&api_key=a2fc7e8497efae9583ecda43732a8d14&format=json
//found endpoint for spotify api

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

let getSpotifyStatus = async () =>{
  
  let res = await fetch("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=jensenzhng&limit=1&api_key=a2fc7e8497efae9583ecda43732a8d14&format=json", {
    method: 'GET'
  });
  let statusJSON = await res.json();
  
  if (statusJSON.recenttracks.track[0]['@attr'].nowplaying) {
    let status = `Listening to ${statusJSON.recenttracks.track[0].name} by ${statusJSON.recenttracks.track[0].artist['#text']} on Spotify`;
    document.getElementById("spotify-status").children[0].innerHTML = status;
  } else {
    document.getElementById("spotify-status").children[0].innerHTML = 'Not listening to anything on Spotify right now';
  }
}

setInterval(getSpotifyStatus,15000)

getSpotifyStatus();