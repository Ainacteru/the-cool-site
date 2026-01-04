const button = document.getElementById('button');

button.addEventListener('click', () => {
    fetch(`http://${location.hostname}:8081/api`)
        .then(res => res.json())
        .then(data => alert(data.message))
        .catch(err => console.error(err));
});
