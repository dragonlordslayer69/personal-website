//http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=jensenzhng&limit=1&api_key=a2fc7e8497efae9583ecda43732a8d14&format=json
//found endpoint for spotify api

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

let displayStatus = async (data) =>{
  if (data.listening_to_spotify) {
    let status = `Listening to ${data.spotify.song} by ${data.spotify.artist} on Spotify`;
    document.getElementById("spotify-status").children[0].innerHTML = status;
  } else {
    document.getElementById("spotify-status").children[0].innerHTML = 'Not listening to anything on Spotify right now';
  }
}

lanyard({
  userId: "611012357425987615",
  socket: true,
  onPresenceUpdate: displayStatus // presenceData
})

lanyard({
  userId: "611012357425987615",
}).then(displayStatus)
