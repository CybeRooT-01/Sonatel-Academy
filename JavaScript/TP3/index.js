const notif_green = document.querySelector(".notif_green")
const notif_red = document.querySelector(".notif_red")
const notif_yellow = document.querySelector(".notif_yellow")
const notif_blue = document.querySelector(".notif_blue")

function addClass(element, ...classes) {
    for (let i = 0; i < classes.length; i++) {
        element.classList.add(classes[i])
    }
}
function timer(notif){
    document.body.appendChild(notif)
    setTimeout(() => {
        notif.remove()
    }, 1000)
}
notif_green.addEventListener("click", () => {
    const notif = document.createElement("div")
    notif.innerText = "Green"
    addClass(notif, "notif", "notif_green", "notification_button", "notification_button_up", "notif_qui_bouge_du_bas")
    timer(notif)
    } 
)

notif_red.addEventListener("click", () => {
    let notif = document.createElement("div")
    addClass(notif, "notif", "notif_red", "notification_button", "notification_button_up", "notif_qui_bouge_du_bas")
    notif.innerText = "red"
    timer(notif)
    } 
)

notif_yellow.addEventListener("click", () => {
    let notif = document.createElement("div")
    addClass(notif, "notif", "notif_yellow", "notification_button", "notification_button_up", "notif_qui_bouge_du_bas")
    notif.innerText = "yellow"
    timer(notif)
    } 
)

notif_blue.addEventListener("click", () => {
    let notif = document.createElement("div")
    addClass(notif, "notif", "notif_blue", "notification_button", "notification_button_up", "notif_qui_bouge_du_bas")
    notif.innerText = "blue"
    timer(notif)
    } 
)
