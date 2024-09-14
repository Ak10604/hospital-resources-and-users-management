// // Function to create a chat session
// async function createChatSession(apiKey, externalUserId) {
//     const url = 'https://api.on-demand.io/chat/v1/sessions';
//     const headers = {
//         'Content-Type': 'application/json',
//         'apikey': apiKey
//     };
//     const body = JSON.stringify({
//         pluginIds: [],
//         externalUserId: externalUserId
//     });

//     try {
//         console.log("Creating chat session...");
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: headers,
//             body: body
//         });

//         if (!response.ok) {
//             throw new Error('Failed to create chat session: ' + response.statusText);
//         }

//         const data = await response.json();
//         console.log("Chat session created successfully. Session ID:", data.data.id);
//         return data.data.id; // Extract session ID
//     } catch (error) {
//         console.error('Error creating chat session:', error);
//         throw error;
//     }
// }

// // Function to submit a query
// async function submitQuery(apiKey, sessionId, query) {
//     const url = `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`;
//     const headers = {
//         'Content-Type': 'application/json',
//         'apikey': apiKey
//     };
//     const body = JSON.stringify({
//         endpointId: 'predefined-openai-gpt4o',
//         query: query,
//         pluginIds: ['plugin-1726255456'], // Ensure this pluginId is correct
//         responseMode: 'sync'
//     });

//     try {
//         console.log("Submitting query to session ID:", sessionId);
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: headers,
//             body: body
//         });

//         if (!response.ok) {
//             throw new Error('Failed to submit query: ' + response.statusText);
//         }

//         const data = await response.json();
//         console.log("Query submitted successfully. Response:", data);
//         return data; // Return the full response for further processing
//     } catch (error) {
//         console.error('Error submitting query:', error);
//         throw error;
//     }
// }

// // Function to handle user interaction with the chat
// async function handleChat() {
//     const apiKey = 'nd8Vxj1371HiZMErZRl303BF5tDcuRW5'; // Replace with your actual API key
//     const externalUserId = 'ak10604'; // Replace with your actual external user ID
//     const query = document.getElementById('userQuery').value; // Get the user's query
//     const responseOutput = document.getElementById('responseOutput');
//     const errorMessage = document.getElementById('errorMessage');

//     // Clear previous output
//     responseOutput.innerText = '';
//     errorMessage.innerText = '';

//     if (!query) {
//         errorMessage.innerText = 'Please enter a query!';
//         return;
//     }

//     try {
//         console.log("Handling chat with query:", query);

//         // Create a new chat session
//         const sessionId = await createChatSession(apiKey, externalUserId);
//         console.log('Session ID:', sessionId);

//         // Submit the user's query and get the response
//         const response = await submitQuery(apiKey, sessionId, query);

//         // Assuming the answer is in `response.data.answer`
//         const answer = response.data?.answer || 'No answer available';
//         console.log('Answer:', answer);
//         responseOutput.innerText = answer;
//     } catch (error) {
//         console.error('Error:', error);
//         errorMessage.innerText = 'Error: ' + error.message;
//     }
// }




















// Function to create a chat session
async function createChatSession(apiKey, externalUserId) {
    const url = 'https://api.on-demand.io/chat/v1/sessions';
    const headers = {
        'Content-Type': 'application/json',
        'apikey': apiKey
    };
    const body = JSON.stringify({
        pluginIds: [],
        externalUserId: externalUserId
    });

    try {
        console.log("Creating chat session...");
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error('Failed to create chat session: ' + response.statusText);
        }

        const data = await response.json();
        console.log("Chat session created successfully. Session ID:", data.data.id);
        return data.data.id; // Extract session ID
    } catch (error) {
        console.error('Error creating chat session:', error);
        throw error;
    }
}

// Function to submit a query
async function submitQuery(apiKey, sessionId, query) {
    const url = `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`;
    const headers = {
        'Content-Type': 'application/json',
        'apikey': apiKey
    };
    const body = JSON.stringify({
        endpointId: 'predefined-openai-gpt4o',
        query: query,
        pluginIds: ['plugin-1726255456'], // Ensure this pluginId is correct
        responseMode: 'sync'
    });

    try {
        console.log("Submitting query to session ID:", sessionId);
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error('Failed to submit query: ' + response.statusText);
        }

        const data = await response.json();
        console.log("Query submitted successfully. Response:", data);
        return data; // Return the full response for further processing
    } catch (error) {
        console.error('Error submitting query:', error);
        throw error;
    }
}

// Function to handle user interaction with the chat
async function handleChat() {
    const apiKey = 'nd8Vxj1371HiZMErZRl303BF5tDcuRW5'; // Replace with your actual API key
    const externalUserId = 'your_actual_external_user_id'; // Replace with your actual external user ID
    const query = document.getElementById('userQuery').value; // Get the user's query
    const responseOutput = document.getElementById('responseOutput');
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous output
    responseOutput.innerText = '';
    errorMessage.innerText = '';

    if (!query) {
        errorMessage.innerText = 'Please enter a query!';
        return;
    }

    try {
        console.log("Handling chat with query:", query);

        // Create a new chat session
        const sessionId = await createChatSession(apiKey, externalUserId);
        console.log('Session ID:', sessionId);

        // Submit the user's query and get the response
        const response = await submitQuery(apiKey, sessionId, query);

        // Assuming the answer is in `response.data.answer`
        let answer = response.data?.answer || 'No answer available';

        // Split the answer by line breaks and wrap each line in <p> tags to create paragraphs
        const paragraphs = answer.split('\n').map(line => `<p>${line}</p>`).join('');

        console.log('Formatted Answer:', paragraphs);
        responseOutput.innerHTML = paragraphs; // Use innerHTML to render <p> tags
    } catch (error) {
        console.error('Error:', error);
        errorMessage.innerText = 'Error: ' + error.message;
    }
}
