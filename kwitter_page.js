firebase.initializeApp(firebaseConfig);
const firebaseConfig = 
{
    apiKey: "AIzaSyAyQ1wcqtpVT3DrbUCAt2TvFlTDbQS9dlY",
    authDomain: "kwitter-71ab9.firebaseapp.com",
    projectId: "kwitter-71ab9",
    storageBucket: "kwitter-71ab9.appspot.com",
    messagingSenderId: "106630864646",
    appId: "1:106630864646:web:921fb2ca5dd8353f8ac887"
};

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Comece a programar aqui

//Termine de programar aqui
      } });  }); }
getData();

function send()
{

    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
        name : username,
        message : msg,
        likes : 0
    });

    document.getElementById("msg").value = "";

}