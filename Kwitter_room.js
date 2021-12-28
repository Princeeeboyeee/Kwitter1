var firebaseConfig = {
    apiKey: "AIzaSyDfbyO_8kB9LIrGWYO2bYIQNKSs1Ljrg-w",
    authDomain: "kwitter-bfe45.firebaseapp.com",
    databaseURL: "https://kwitter-bfe45-default-rtdb.firebaseio.com",
    projectId: "kwitter-bfe45",
    storageBucket: "kwitter-bfe45.appspot.com",
    messagingSenderId: "84160361097",
    appId: "1:84160361097:web:7b249b52dd1de4333f0c58"
  };    
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("username");
  room_name=localStorage.getItem("roomname");
   document.getElementById("username").innerHTML="Welcome " + username  + " !";
function getData() {
firebase.database().ref("/").on('value',
function(snapshot) {
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name : " + Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>"
    });});}
getData();

function addUser(){
    user_name=document.getElementById("username").value;
    localStorage.setItem("username" , username);
    window.location="Kwitter_room.html";
}

function addRoom(){
room_name=document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
    purpose : "Adding Room Name"
});
localStorage.setItem("roomname", roomname);
window.location="Kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomname", roomname);
    window.location("Kwitter_page.html");
}

