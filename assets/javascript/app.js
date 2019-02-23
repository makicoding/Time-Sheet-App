$(document).ready =()=>{


    


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
      console.log("working!")

      // Grabbed values from text boxes
      name = $("#name-input").val().trim();
      role = $("#role-input").val().trim();
      startDate = $("#startdate-input").val().trim();
      monthsWorked = $("#months-input").val().trim();
      monthlyRate = $('#rate-input').val().trim();
      totalBilled = monthsWorked * monthlyRate;

      // Code for handling the push
      database.ref().push({
          name: name,
          role: role,
          startDate: startDate,
          monthsWorked: monthlyRate,
          totalBilled: totalBilled,
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
    $("#role-display").text(sv.role);
    $("#startdate-display").text(sv.startDate);
    $("#months-display").text(sv.monthsWorked);
    $('#totalbilled').text(sv.totalBilled)

    // Handle the errors
    }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
    });
    
    



  }