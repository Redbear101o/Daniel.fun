async function chat(message) {
    const options = {
        method: 'POST',
        url: 'https://open-ai21.p.rapidapi.com/claude3',
        headers: {
            'x-rapidapi-key': 'd2a02bc920msh221c2375bdf1bdfp1d05b8jsn13f42fa10767',
            'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: {
            messages: [
                {
                    role: 'user',
                    content: message
                }
            ],
            web_access: false
        }
    };
    
    try {
        const response = await axios.request(options);
        //console.log(response.data)
        return response.data; // Return the data for further use
    } catch (error) {
        console.error(error);
        return null; // Return null on error
    }
}

document.getElementById('sendButton').addEventListener('click', async () => {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        // Display the user message
        const chatDiv = document.getElementById('chat');
        chatDiv.innerHTML += `<div class="user-message">You: ${message}</div>`;
        input.value = '';

        // Send the message to the API
        const response = await chat(message);
        if (response) {
            // Display the AI response
            chatDiv.innerHTML += `<div class="ai-message">AI: ${response.result}</div>`;
            chatDiv.scrollTop = chatDiv.scrollHeight; // Scroll to the bottom
        }
    }
});
