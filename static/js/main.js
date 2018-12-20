'use strict';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDU9tPfTQkTsae_BaK1JLyCKOaPQmKxwU",
    authDomain: "contactform-for-portfolio.firebaseapp.com",
    databaseURL: "https://contactform-for-portfolio.firebaseio.com",
    projectId: "contactform-for-portfolio",
    storageBucket: "contactform-for-portfolio.appspot.com",
    messagingSenderId: "302211694752"
  };
  firebase.initializeApp(config);

//reference messages collection
var messagesRef = firebase.database().ref('messages');


// //listen for form submit
   var contact = document.getElementById('contactForm')
   if (contact) {
    contact.addEventListener('submit', submitForm );
}
function submitForm(e) {
    e.preventDefault();
    
    //get values
    let name = getInputValue("name");
    let email = getInputValue("email");
    let city = getInputValue("city");
    let state = getInputValue("state");
    let message = getInputValue("message");

    //save message
    saveMessage(name, email, city, state, message)

    //show alert
    document.querySelector(".alert").style.display = "block";

    //hide alert after three seconds

    setTimeout(function(){
        document.querySelector(".alert").style.display = "none";
    },3000)

    //reset to blank form
    document.getElementById("contactForm").reset();
}

//function to get form values

function getInputValue(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, city, state, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        city: city,
        state: state,
        message: message
    })

}



//--------------------------------


//reference animals collection
var animalsRef = firebase.database().ref('animals');

//listen for form add submit
var aniAdd = document.getElementById('animalForm')
if(aniAdd) {
aniAdd.addEventListener('submit', submitAnimalForm);
}
function submitAnimalForm(evt) {
    evt.preventDefault();
    
    //get values
    let animalname = getInputValue("animalname");
    let useremail = getInputValue("useremail");

    //save message
    saveAnimalMessage(animalname, useremail)

    //show alert
    document.querySelector(".ani-alert").style.display = "block";

    //hide alert after three seconds

    setTimeout(function(){
        document.querySelector(".ani-alert").style.display = "none";
    },3000)

    //reset to blank form
    document.getElementById("animalForm").reset();
}

//save message to firebase
function saveAnimalMessage(animalname, useremail) {
    var animalsMessageRef = animalsRef.push();
    animalsMessageRef.update({
        name: animalname,
        email: useremail
    }, function(error) {
        if (error) {
        console.log("the animal save went wrong")
        } else {
        console.log("data was saved")
        }
    });
}
animalsRef.on("child_added", function(snapshot) {
    //snapshot.forEach(function (snapshot){
        var obj = snapshot.val();
        console.log(obj.name)
        var objname = obj.name
        var objemail = obj.email
        var cont = document.getElementById("AN");
        var elem = document.createElement("p")
        elem.innerHTML = objname + " (" + objemail + ")";
        cont.append(elem)
    //})
  });



//-----------------------------------------------------
//reference animals collection
var thingRef = firebase.database().ref('things');

//listen for thing form clicks
var theParent = document.querySelector("#theDude");
theParent.addEventListener("click", doSomething, false);

function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        if (clickedItem == "add-thing") {

                    e.preventDefault();
                    
                    //get values
                    let thingname = getInputValue("thingname");

                    //save thing
                    saveThingToFirebase(thingname)

                    //show alert
                    document.querySelector(".added").style.display = "block";

                    //hide alert after three seconds

                    setTimeout(function(){
                        document.querySelector(".added").style.display = "none";
                    },2000)

                    //reset to blank form
                    document.getElementById("thingForm").reset();
                
                //save thing to firebase
                function saveThingToFirebase(thingname) {
                    var thingMessageRef = thingRef.push();
                    thingMessageRef.update({
                        name: thingname,
                    }, function(error) {
                        if (error) {
                        console.log("the thing save went wrong")
                        } else {
                        console.log("thing was saved")
                        }
                      });
                }



        } else if (clickedItem == "change-thing") {
            alert("this function is changing things")
            e.preventDefault();
                    
            //get values
            let thingname = getInputValue("thingname");
            let thingchangename = getInputValue("thingchange")

            //change thing
            changeThingInFirebase(thingname, thingchangename)


            //show alert
            document.querySelector(".changed").style.display = "block";

            //hide alert after three seconds
            setTimeout(function(){
                document.querySelector(".changed").style.display = "none";
            },2000)

            //reset to blank form
            document.getElementById("thingForm").reset();

            //change thing to firebase
            function changeThingInFirebase(thingname, thingchangename) {
                console.log(thingname)
                console.log(thingchangename)
                var changeword = thingchangename;
                var personRef = thingRef.orderByChild('name').equalTo(thingname);

                personRef.once('value', function(snapshot) {

                    if( snapshot.val() === null ) {
                        /* does not exist */
                    } else {
                        snapshot.ref().update({"name": changeword});
                    }
                });
            }

        } else if (clickedItem == "delete-thing") {
                e.preventDefault();
                    
                    //get values
                    let thingname = getInputValue("thingname");

                    //save thing
                    deleteThingFromFirebase(thingname)

                    //show alert
                    document.querySelector(".deleted").style.display = "block";

                    //hide alert after three seconds

                    setTimeout(function(){
                        document.querySelector(".deleted").style.display = "none";
                    },2000)

                    //reset to blank form
                    document.getElementById("thingForm").reset();

                //delete thing to firebase
                function deleteThingFromFirebase(thingname) {
                    var query = thingRef.orderByChild('name').equalTo(thingname);
                    query.on('child_added', function(snapshot) {

                         var snapshotvalue = snapshot.val();
                        snapshot.ref.remove();


                    })
                }

        } else {
            alert("Something went wrong ")
        }
    } // end if statment do not delete
    e.stopPropagation();
} // end doSomething


thingRef.on("child_added", function(snapshot) {
        var obj = snapshot.val();
        console.log(obj.name);
        var objname = obj.name
        var thinglist = document.getElementById("thing-list");
        var elem = document.createElement("p")

        elem.innerHTML = objname;
        elem.id = objname
        thinglist.append(elem)
  });

thingRef.on("child_changed", function(snapshot) {
    console.log("child_changed fired just now")
  });


thingRef.on("child_removed", function(snapshot) {
    console.log("child_removed fired just now")
        var obj = snapshot.val();
        var objname = obj.name
        var list = document.getElementById("thing-list");
        var removeMe = document.getElementById(objname);
        list.removeChild(removeMe);
  });

