var firebaseConfig = {
  apiKey: "AIzaSyBqIImPQQ1IZXUj8ZUpYgmud15maKs1deU",
  authDomain: "contactform-789f4.firebaseapp.com",
  databaseURL: "https://contactform-789f4.firebaseio.com",
  projectId: "contactform-789f4",
  storageBucket: "",
  messagingSenderId: "642418086912",
  appId: "1:642418086912:web:5b3d83a70523f932"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//create firebase database reference
var dbRef = firebase.database();
var contactsRef = dbRef.ref('contacts')
$('.contactForm').on("click", function( event ) {  
  event.preventDefault();
  var userdata = {
    name: $('.name').val(),
    email: $('.email').val(),
    message: $('.message').val()
  }
  console.log(userdata)
  contactsRef.push(userdata)
  
  
  fetch(" https://contactform-789f4.firebaseio.com/ ",
  {
    mode: 'no-cors',
    method: "POST",
    body: JSON.stringify(userdata)
  }).then(function() {
    alert('successs')
  })
});








// save contact

// //listen for form submit
// document.getElementById('contactForm').addEventListener('submit',submitForm);

// // submit form
// function submitForm(e)
// {
//     e.preventDefault();
//     //get values
//     var name = getInputVal('name');
//     var email = getInputVal('email');
//     var message = getInputVal('message');


//     //save message
//     saveMessage(name,email,message);

// }
// // function to get form values
// function getInputVal(id)
// {
//     return document.getElementById(id).value;
// }


// //save messages to firebase
//  function saveMessage(name,email,message){
//      var newMessageRef = messageRef.push();
// newMessageRef.set({
//     name : name,
//     email:email,
//     message:message
// });
//  }