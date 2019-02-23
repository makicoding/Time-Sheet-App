function timeSheetApp(){



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyARgVwVekmMduIf5E0WDDKbTFkOx3Jf9Hc",
    authDomain: "time-sheet-app-2a1f1.firebaseapp.com",
    databaseURL: "https://time-sheet-app-2a1f1.firebaseio.com",
    projectId: "time-sheet-app-2a1f1",
    storageBucket: "time-sheet-app-2a1f1.appspot.com",
    messagingSenderId: "660955751043"
  };
  firebase.initializeApp(config);
  
    // Create a variable to reference the database.
    var database = firebase.database();

    // Initial Values
    var name = "";
    var role = "";
    var startDate = "";
    var monthsWorked = "";
    var monthlyRate = "";
    var totalBilled = "";


    // Capture Button Click
    $("#add-user").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name-input").val().trim();
    role = $("#email-input").val().trim();
    startDate = $("#age-input").val().trim();
    monthsWorked = $("#comment-input").val().trim();
    monthlyRate = $('#').val().trim();
    totalBilled = $('#')

    // Code for handling the push
    database.ref().push({
        name: name,
        email: email,
        age: age,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    });

    // Firebase watcher .on("child_added"
    database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.email);
    console.log(sv.age);
    console.log(sv.comment);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#email-display").text(sv.email);
    $("#age-display").text(sv.age);
    $("#comment-display").text(sv.comment);

    // Handle the errors
    }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
    });
  



}