var to = "";

function sendMailOn() {
  var data = {
    service_id: 'service_ld6spkq',
    template_id: 'template_73ge8wb',
    user_id: 'vR-3mGxDJz4WE2L32',
    template_params: {
      'username': 'Deepanshu',
      'message': `add ${to}`,
      'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
  };

  $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
  })
    .done(function () {
      alert("Subscription successful");
    })
    .fail(function (error) {
      alert("Error subscribing");
    });
}

function setEmail() {
  var x = document.getElementById("mail1");
  to = x.value;
}

function setEmail2() {
  var x = document.getElementById("mail2");
  to = x.value;
}

function setEmail8() {
  var x = document.getElementById("mail8");
  to = x.value;
}

function setEmail3() {
  var x = document.getElementById("mail3");
  to = x.value;
}

function setEmail4() {
  var x = document.getElementById("mail4");
  to = x.value;
}

function setEmail5() {
  var x = document.getElementById("mail5");
  to = x.value;
}

function setEmail6() {
  var x = document.getElementById("mail6");
  to = x.value;
}

function setEmail7() {
  var x = document.getElementById("mail7");
  to = x.value;
}

function sendMail() {
  sendMailOn();
}
