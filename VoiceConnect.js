// Check for browser compatibility
if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support Speech Recognition. Please use Google Chrome.');
  } else {
    const recognition = new webkitSpeechRecognition(); // Create recognition object
    recognition.lang = 'en-US'; // Set language
    recognition.interimResults = false; // Only final results
    recognition.maxAlternatives = 1;
  
    // Get elements
    const startButton = document.getElementById('start-button');
    const userSpeech = document.getElementById('user-speech');
    const response = document.getElementById('response');
  
    // Responses based on user input
    const responses = {
      hello: 'Hello! How can I assist you?',
      howareyou: 'I am just a program, but I am doing great! How about you?',
      iamgood: 'That is great to hear!',
      iamnotgood: 'I am sorry to hear that. How can I help you?',
      thankyou: 'You are welcome!',
      goodbye: 'Goodbye! It was nice chatting with you.',
      weather: 'The weather is beautiful today!',
      bye: 'Goodbye! Have a great day!',
      default: "I didn't understand that. Could you please repeat?"
    };
  
    // Start speech recognition
    startButton.addEventListener('click', () => {
      recognition.start();
      response.textContent = 'Listening...';
    });
  
    // Handle recognition results
    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.toLowerCase();
      userSpeech.textContent = speechResult;
  
      // Find a response
      const reply = responses[speechResult] || responses.default;
      response.textContent = reply;
    };
  
    // Handle recognition errors
    recognition.onerror = (event) => {
      response.textContent = `Error: ${event.error}`;
    };
  
    // Notify when recognition ends
    recognition.onend = () => {
      console.log('Speech recognition ended.');
    };
  }
  
