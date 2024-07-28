



    
function sendEmail() {
  let name = document.getElementById('name').value;
  let contact = document.getElementById('contact').value;
  let items = document.getElementById('items').value;
  let block = document.getElementById('block').value;
  let room_number = document.getElementById('roomnumber').value;
  let message = document.getElementById('message').value;


  let email = "soaphub@gmail.com";
  let subject = "Service Request Details";
  let body = 
  `
  Customer Name: ${name}
  Customer Contact: ${contact}
  Customer Items: ${items}
  Customer Block: ${block}
  Customer Room Number: ${room_number}
  Customer Message: ${message}
  `

  let mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  window.open(mailtoLink, '_blank').focus();
}

const order = document.getElementById('order');
order.addEventListener('click', sendEmail());

