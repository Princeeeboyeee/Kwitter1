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

function getData() { firebase.database().ref("/"+room_name).on('value',
function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
