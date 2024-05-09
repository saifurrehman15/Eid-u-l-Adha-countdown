function updateDays() {

    // let user = document.getElementById('date').value;
    // console.log(user)
    let dat = new Date("17 June,2024").getTime();
    let dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = new Date("17 June,2024").getDay();
    let getDay = dayArr[day];
    let today = new Date().getTime();
    let cal = dat - today;
    let hour = Math.floor((cal / (1000 * 60 * 60 )) % 24);
    let min = Math.floor((cal / (1000 * 60 )) % 60);
    let month = Math.floor(cal / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((cal / (1000 * 60 * 60 * 24 )) % 30);

    let sec = Math.floor((cal / (1000)) % 60);

    document.getElementById('ageShow').innerHTML = "<div class='boxes'><div class='box2'>Remaining Month :" + month + "</div></div><div class='boxes'>Remaining Days :" + days + "</div><div class='boxes'>Day of 1st Eid : " + getDay + "</div><div class='boxes'>Hour :" + hour + "</div><div class='boxes'>Min :" + min + "</div><div class='boxes'>Sec : " + sec + "</div>";

} setInterval(updateDays, 1000)

