
var firebaseConfig = {
    apiKey: "AIzaSyDLaV-KtB8AlnuvmJFskNeIx-rOaEn6cr8",
    authDomain: "kwitterproject-bae0e.firebaseapp.com",
    databaseURL: "https://kwitterproject-bae0e.firebaseio.com",
    projectId: "kwitterproject-bae0e",
    storageBucket: "kwitterproject-bae0e.appspot.com",
    messagingSenderId: "1024305224118",
    appId: "1:1024305224118:web:ac560597e36fdb5cfd8917",
    measurementId: "G-QVXJLF68T1"
  };
  
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
});});}
getData();