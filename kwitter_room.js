
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAUQ6aBLsOGQmCBxdErYAAQ7pUPFYAK4S4",
      authDomain: "kwitter-e03b2.firebaseapp.com",
      databaseURL: "https://kwitter-e03b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-e03b2",
      storageBucket: "kwitter-e03b2.appspot.com",
      messagingSenderId: "839679863534",
      appId: "1:839679863534:web:2a1550c60df436e41061ff"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

     function add_room(){
           room_name=document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                 purpose:"adding roomnames"
           });
           localStorage.setItem("room_name",room_name);
           window.location="kwitter_page.html";
     }
     function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "index.html";
}






