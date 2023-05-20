const toasts = document.getElementById('toasts')

function toast(message, type) {
    if (message == "null")
        message = "Something went wrong";
    if (type == "null")
        type = "info"

    createNotification(message, type);
}
function createNotification(message, type) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type);
    notif.innerText = message;
    toasts.appendChild(notif);
    setTimeout(() => {
        notif.remove()
    }, 3000)
}