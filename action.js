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
        // Handle successful message sending
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
};

// Example usage: Call sendTelegramMessage(formData) with your form data object
// Replace formData with your actual form data object
// For testing purposes, you can create a sample form data object like:
// const formData = { name: 'John Doe', email: 'johndoe@example.com', message: 'Hello, World!' };
