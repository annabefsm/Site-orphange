//caso eu queira tirar as opções de zoom na area do mapa
// const options={
//   dragging: false,
//   touchZoom: false,
//   doubleClickZoom: false,
//   scrollWhellZoom: false,
//   zoomControl: false
//}


//('mapid', options) caso queira q a const faça efeito
// create map
const map = L.map('mapid').setView([-16.7147662,-49.2528661], 14)

// create and tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

// create and add marker 
L.marker([-16.7147662,-49.2528661], {icon})
.addTo(map)

//image galery

function selectImage(event) {
    const button =event.currentTarget
    // remove all the activities classes
    const buttons= document.querySelectorAll(".images button")

    buttons.forEach(removeActiveClass)
    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    // select the clicked image
    // children seria as tags abertas dentro da tag button, no caso button possui img de children
    const image= button.children[0]
    const imageContainer= document.querySelector(".orphanage-details > img")

    // update the image container
    imageContainer.src= image.src

    // add the active class for the bottom
    button.classList.add('active')
}
