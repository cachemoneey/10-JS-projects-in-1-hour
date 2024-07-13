const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('Toast');

    notif.innerText = "This challenge is crazy!";
    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// challenges
// no background color or text color on notifs
// notifs hit a max limit
// have to keep clicking some notifs disappear