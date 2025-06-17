const clientId = 'cebd54c1eee446ffb4696a71bf3f87f6';
const clientSecret = 'd215da4bae524b279bac224dabab951c';
const playlistId = '1Et4Sw15Fcc76LDmCx4o9e';
const luckasId = 'c2792e5pp5xtu1a5d9z8u10kf'; // substitua pelo seu user ID
const annaId = '31uyjp4rxunsniqobvq2vi5lpym4';      // substitua pelo user ID dela (se tiver)

// Função para obter token
async function getAccessToken() {
  const resp = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });
  return (await resp.json()).access_token;
}

// Função para buscar playlist
async function fetchPlaylist(token) {
  const resp = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}?fields=images,name,tracks.items(added_by.id,track(name,artists(name)))&limit=100`, {
    headers: { 'Authorization': 'Bearer ' + token }
  });
  return resp.json();
}

function renderTracks(items) {
  let html = '';
  let total = items.length;
  let luckas = 0;
  let anna = 0;

  items.forEach((item, i) => {
    const by = item.added_by?.id;
    if (by === luckasId) luckas++;
    if (by === annaId) anna++;

    const name = item.track.name;
    const artist = item.track.artists.map(a => a.name).join(', ');
    html += `<li><span>${i+1}.</span> <strong>${name}</strong> – <em>${artist}</em></li>`;
  });

  document.getElementById('totalMusicas').textContent = total;
  document.getElementById('luckasCount').textContent = luckas;
  document.getElementById('annaCount').textContent = anna;
  document.getElementById('musicList').innerHTML = html;
}

async function init() {
  const token = await getAccessToken();
  const data = await fetchPlaylist(token);

  document.getElementById('playlist-cover').src = data.images[0]?.url;
  document.getElementById('playlist-name').textContent = data.name;

  renderTracks(data.tracks.items);
}

document.addEventListener('DOMContentLoaded', init);