firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
    apiKey: "AIzaSyChEhwMX4-AT7bmcusA9-8fnZ9Id0wLXM0",
    authDomain: "estou-sem-criatividade.firebaseapp.com",
    databaseURL: "https://estou-sem-criatividade-default-rtdb.firebaseio.com",
    projectId: "estou-sem-criatividade",
    storageBucket: "estou-sem-criatividade.appspot.com",
    messagingSenderId: "452737135408",
    appId: "1:452737135408:web:45fabf46bf253be967cef5",
    measurementId: "G-Q34HEJLT8Z"
  };


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
        localStorage.setItem("user_name" , user_name);

        window.location = "chat_room.html";
    });
    
    
}



