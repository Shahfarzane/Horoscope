var dateInput = document.getElementById("userInputDate").value


function initSite(){
   

    document.getElementById("starSign").innerHTML = " "
}


// var buttonAdd = document.getElementById("addButton")
// buttonAdd.addEventListener("click", setsS)
// async function makeRequest(path, method, body){

//     try {
//         const response = await fetch(path,{
//             method,
//             body
//         })
//         console.log(response)
    
//         return response.json()
//     } catch(err){
//         console.log(err)
//     }
// }

// }


// async function setHoroscope(){

//     var userDateInput = document.getElementById("userInputDate").value
//     var formData = new FormData();
//     formData.append('date', userDateInput);


//     if (!userDateInput.length){
//         console.log("ned to write something")
//         return
//     }
  
//     const collectedName = await makeRequest("./backend/addHoroscope.php", "POST", formData)

    

// }





function addHoroscope() {

    var userDateInput = document.getElementById("userInputDate").value
    var formData = new FormData();
    formData.append('date', userDateInput);

    fetch('./backend/addHoroscope.php', {
        method: 'POST',
        body: formData
    }).then((res) => {
        return res.json()
    }).then((result) => {
        console.log(result)
        if (result) {
            getHoroscope()
        }
    }).catch((error) => {
        console.log("Error: ", error)
    })

}
function getHoroscope(){

    fetch('./backend/viewHoroscope.php', {
        method: 'GET',
    }).then(function(response){
        
        return response.json()
    }).then(function(res) {
            if(res){
                document.getElementById("starSign").innerHTML = "Your star sign:" + " " + res.starSignName

            }

            else {
                document.getElementById("starSign").innerHTML = "No date saved in the Sessions"

            }

    }).catch((error) => {
        console.log("Error: ", error)
    })
}


function removeHoroscope() {

    fetch('./backend/deleteHoroscope.php', {
    method: 'DELETE',
    }).then(function(res){
        return res.json()
    }).then(function() { 
        var starSign = document.getElementById("starSign")
        starSign.innerHTML = "Deleted";
        
        
    }).catch((error) => {
        console.log("Error: ", error)
    })
}


function updateHoroscope() {

    var userDateInput = document.getElementById("userInputDate").value
     
    fetch('./backend/updateHoroscope.php', {
        method: 'POST',
        body: userDateInput
    }).then((res) => {
        return res.json()
    }).then((result) => {
        console.log(result)
        var starSign = document.getElementById("starSign")
        starSign.innerHTML = "You need to enter a date to update";
        if (result) {
            getHoroscope()
        }

    }).catch((error) => {
        console.log("Error: ", error)
    })
}


// async function getHoroscopee(){
  
    

//     const collectedName = await makeRequest("./backend/viewHoroscope.php", "GET")
  
//     .then(function(data) {
//         document.getElementById("starSign").innerHTML = " "
//         document.getElementById("starSign").innerHTML = "Your star sign:" + " " + data.name;

//         // console.log(collectedName)

// })







