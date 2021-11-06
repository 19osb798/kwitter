
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqsH0r9pOtbGuYL0K9wv3QRSr-1KXtjZU",
  authDomain: "kwitter-dac70.firebaseapp.com",
  databaseURL: "https://kwitter-dac70-default-rtdb.firebaseio.com",
  projectId: "kwitter-dac70",
  storageBucket: "kwitter-dac70.appspot.com",
  messagingSenderId: "45029643201",
  appId: "1:45029643201:web:3692d50b4cbe34f7fb9540"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addroom(){
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}