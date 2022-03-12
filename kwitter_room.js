
var firebaseConfig = {
      apiKey: "AIzaSyDHzkATG-hMD4jH6lux7A7mdE59JAiUiNA",
      authDomain: "class-test-22a84.firebaseapp.com",
      projectId: "class-test-22a84",
      storageBucket: "class-test-22a84.appspot.com",
      messagingSenderId: "743842120461",
      appId: "1:743842120461:web:acb98da0a816b22b532644"
    };
    

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
      { 
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
            {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;   
      //End code

      });});}
getData();




function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update()({
   purpose : "adding room name"; 
});
}




function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}