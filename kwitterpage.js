var firebaseConfig = {
    apiKey: "AIzaSyDHzkATG-hMD4jH6lux7A7mdE59JAiUiNA",
    authDomain: "class-test-22a84.firebaseapp.com",
    projectId: "class-test-22a84",
    storageBucket: "class-test-22a84.appspot.com",
    messagingSenderId: "743842120461",
    appId: "1:743842120461:web:acb98da0a816b22b532644"
  };
  

  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message.data);
name = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>'       

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML = row;



function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id.update).update({
    like : updated_likes

    });
}






function send()
{ 
msg = document.getElementById("msg").value; 
firebase.database().ref(room_name).push({
 name:user_name,
  message:msg,
   like:0 
});

document.getElementById("msg").value = ""; 

}
//End code
 } });  }); }
getData();
