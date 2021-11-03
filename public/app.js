// get user's data                                                              
// Get the user's coordinates:                                                              
async function getCoords(){
    let pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

// async function getCoords() {
//     return await navigator.geolocation.getCurrentPosition(getPos);
// }
// function getPos(pos) {
//     return [pos.coords.latitude, pos.coords.longitude]
// }

// console.log(getCoords());                                                     

// get user's time
function userTime() {
    const now = new Date()
    return now.getHours()
}

// helper functions
// check time of day
// Get the user's time:                                                              
function getMealTime(){
    const timeOfDay = userTime()
    return timeOfDay > 20 ? 'latenight snack' : timeOfDay > 16 ? 'dinner' : timeOfDay > 11 ? 'lunch' : 'breakfast'
}                  

// build ads
// build ad 1
function buildAd1() {
    const mealTime = getMealTime()
    let content = document.querySelector(".ad1")
    let inner = document.createElement("p")
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town!`
    content.append(inner)
}
                                                          
// Build Ad 2                                                             
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}

// event listeners
// on load, build ads
// On load, build ads:                                                             
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}