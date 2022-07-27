const firebaseConfig = {
    apiKey: "AIzaSyCHuumDdTw2KELHbnV2tLaWT3Zemiug10A",
    authDomain: "let-chat-web-app-f771f.firebaseapp.com",
    projectId: "let-chat-web-app-f771f",
    storageBucket: "let-chat-web-app-f771f.appspot.com",
    messagingSenderId: "977110867697",
    appId: "1:977110867697:web:952597fd50619e45475350"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });

    localStorage.setItem("room_name",room_name);
    window.location= "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room-"+ Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;

   //End code
   });});}
getData();

function redirectToRoomName(name)
{

console.log(name)
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";   
}

