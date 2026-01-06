const heartbeat = 1; // seconds

const button = document.getElementById('button');

button.addEventListener('click', () => {
    fetch(`/api`)
        .then(res => res.json())
        .then(data => alert(data.message))
        .catch(err => console.error(err));
});

async function HeartBeat() {
  try {
    const res = await fetch(`/api/heartbeat`);
    const data = await res.json();
    //console.log(data.message);
  } catch (err) {
    console.error('Heartbeat failed', err);
  }

  setTimeout(HeartBeat, heartbeat * 1000);
}

HeartBeat();