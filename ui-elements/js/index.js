$(function() {
  $("#submit").click(()=>{
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/user-message",
      dataType: "json"
    }).done((data)=>{
      console.log(data);
      $.ajax({
        type: "POST",
        url:"http://localhost:3000/user-message",
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message
        }
      }).done((data)=>{
        console.log(data);
        alert("Message Successfully sent");
      });
    });
  });


  // $("#proress-bar").on("load", ()=>{
  //   var width = 1;
  // });
});
// function proBar() {
//   var progressBar = document.getElementById("progress-bar");
//   var width = 1;
//   var interval = setInterval(frame, 10);
//   function frame() {
//     if (width >= 70) {
//       clearInterval(interval);
//     }
//     else{
//       width++;
//       progressBar.style.width = width + "%";
//     }
//   }
// }
