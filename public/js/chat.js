// Import the GeoIP2 library
import { initGeoIP } from './geoip.js';
// Import the GeoIP initialization function
import { initGeoIP } from './geoip.js';

// Initialize the chat interface
export function initChat() {
    const chatContainer = document.getElementById('chat-container');
    const openChatBtn = document.getElementById('open-chat');
    const minimizeChatBtn = document.getElementById('minimize-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    
    let isChatOpen = false;
    
    // Open/close chat
    openChatBtn.addEventListener('click', () => {
        isChatOpen = !isChatOpen;
        chatContainer.classList.toggle('open', isChatOpen);
    });
    
    minimizeChatBtn.addEventListener('click', () => {
        isChatOpen = false;
        chatContainer.classList.remove('open');
    });
    
    // Send message on button click or Enter key
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Add welcome message
    addBotMessage("Hello! I'm your AI travel assistant. How can I help you plan your trip today?");
    
    // Function to send a message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        addUserMessage(message);
        chatInput.value = '';
        
        // Simulate thinking
        setTimeout(() => {
            generateResponse(message);
        }, 800);
    }
    
    // Function to add a user message to the chat
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to add a bot message to the chat
    function addBotMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Generate a response based on user input
    function generateResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            addBotMessage("Hello there! Ready to plan your next adventure?");
        } 
        else if (lowerMessage.includes('hotel') || lowerMessage.includes('accommodation')) {
            addBotMessage("I can help you find hotels. Please tell me your destination city and travel dates.");
        }
        else if (lowerMessage.includes('flight') || lowerMessage.includes('airline')) {
            addBotMessage("For flight information, I'll need to know your departure city, destination, and travel dates.");
        }
        else if (lowerMessage.includes('weather')) {
            addBotMessage("I can check the weather for your destination. Which city would you like to know about?");
        }
        else if (lowerMessage.includes('itinerary') || lowerMessage.includes('plan')) {
            addBotMessage("I can help create a travel itinerary. Could you tell me your destination, travel dates, and interests?");
        }
        else if (lowerMessage.includes('thank')) {
            addBotMessage("You're welcome! Is there anything else I can help you with?");
        }
        else {
            addBotMessage("I'm here to help with your travel plans. You can ask me about flights, hotels, weather, or itineraries.");
        }
    }
}
