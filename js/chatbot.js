/**
 * Quick Pass Traffic School - AI Chatbot Widget
 * Customer service chatbot for course content, technical, and registration help
 */

class ChatbotWidget {
    constructor() {
        this.isOpen = false;
        this.sessionId = null;
        this.messages = [];
        this.isLoading = false;
        
        this.init();
    }
    
    init() {
        // Create widget HTML
        this.createWidget();
        
        // Bind events
        this.bindEvents();
        
        // Load session from storage
        this.loadSession();
        
        // Show initial greeting after a delay
        setTimeout(() => {
            if (this.messages.length === 0) {
                this.addBotMessage(
                    "Hi there! 👋 I'm your Quick Pass assistant. I can help you with course content questions, technical support, and registration assistance. How can I help you today?"
                );
                this.showQuickReplies();
            }
        }, 1000);
    }
    
    createWidget() {
        const widget = document.createElement('div');
        widget.className = 'chatbot-widget';
        widget.id = 'chatbotWidget';
        
        widget.innerHTML = `
            <button class="chatbot-toggle" id="chatbotToggle" aria-label="Open chat">
                <svg class="chat-icon" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                    <circle cx="8" cy="10" r="1.5"/>
                    <circle cx="12" cy="10" r="1.5"/>
                    <circle cx="16" cy="10" r="1.5"/>
                </svg>
                <svg class="close-icon" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
                <span class="chatbot-badge" id="chatBadge">1</span>
            </button>
            
            <div class="chatbot-window" id="chatbotWindow">
                <div class="chatbot-header">
                    <div class="chatbot-avatar">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                    </div>
                    <div class="chatbot-info">
                        <h3>Quick Pass Support</h3>
                        <p>We typically reply instantly</p>
                    </div>
                </div>
                
                <div class="chatbot-messages" id="chatMessages">
                    <!-- Messages will be added here -->
                </div>
                
                <div class="quick-replies" id="quickReplies">
                    <!-- Quick reply buttons -->
                </div>
                
                <div class="chatbot-input">
                    <input type="text" id="chatInput" placeholder="Type your message..." autocomplete="off">
                    <button id="chatSendBtn" disabled>
                        <svg viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(widget);
        
        // Store references
        this.widget = widget;
        this.toggle = document.getElementById('chatbotToggle');
        this.window = document.getElementById('chatbotWindow');
        this.messagesContainer = document.getElementById('chatMessages');
        this.input = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('chatSendBtn');
        this.quickRepliesContainer = document.getElementById('quickReplies');
        this.badge = document.getElementById('chatBadge');
    }
    
    bindEvents() {
        // Toggle chat window
        this.toggle.addEventListener('click', () => this.toggleChat());
        
        // Send message on button click
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        
        // Send message on Enter key
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // Enable/disable send button based on input
        this.input.addEventListener('input', () => {
            this.sendBtn.disabled = !this.input.value.trim();
        });
    }
    
    toggleChat() {
        this.isOpen = !this.isOpen;
        this.widget.classList.toggle('open', this.isOpen);
        
        if (this.isOpen) {
            this.badge.classList.remove('show');
            this.input.focus();
            this.scrollToBottom();
        }
    }
    
    loadSession() {
        // Try to load existing session
        const savedSession = localStorage.getItem('chatbot_session');
        if (savedSession) {
            try {
                const data = JSON.parse(savedSession);
                this.sessionId = data.sessionId;
                this.messages = data.messages || [];
                this.renderMessages();
            } catch (e) {
                console.error('Failed to load chat session:', e);
            }
        }
    }
    
    saveSession() {
        localStorage.setItem('chatbot_session', JSON.stringify({
            sessionId: this.sessionId,
            messages: this.messages.slice(-50) // Keep last 50 messages
        }));
    }
    
    renderMessages() {
        this.messagesContainer.innerHTML = '';
        this.messages.forEach(msg => {
            this.appendMessage(msg.role, msg.content, false);
        });
        this.scrollToBottom();
    }
    
    addBotMessage(content) {
        this.messages.push({ role: 'bot', content });
        this.appendMessage('bot', content);
        this.saveSession();
        
        if (!this.isOpen) {
            this.badge.classList.add('show');
        }
    }
    
    addUserMessage(content) {
        this.messages.push({ role: 'user', content });
        this.appendMessage('user', content);
        this.saveSession();
    }
    
    appendMessage(role, content, animate = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${role}`;
        
        const avatarIcon = role === 'bot' 
            ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="#3730a3"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>'
            : '<svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
        
        messageDiv.innerHTML = `
            <div class="message-avatar">${avatarIcon}</div>
            <div class="message-content">${this.formatMessage(content)}</div>
        `;
        
        this.messagesContainer.appendChild(messageDiv);
        
        if (animate) {
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateY(10px)';
            requestAnimationFrame(() => {
                messageDiv.style.transition = 'all 0.3s ease';
                messageDiv.style.opacity = '1';
                messageDiv.style.transform = 'translateY(0)';
            });
        }
        
        this.scrollToBottom();
    }
    
    formatMessage(content) {
        // Convert markdown-like formatting to HTML
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }
    
    showTypingIndicator() {
        const typing = document.createElement('div');
        typing.className = 'chat-message bot';
        typing.id = 'typingIndicator';
        typing.innerHTML = `
            <div class="message-avatar">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#3730a3"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            </div>
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        this.messagesContainer.appendChild(typing);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }
    
    showQuickReplies() {
        const replies = [
            'Course information',
            'Technical help',
            'How to register',
            'Payment questions'
        ];
        
        this.quickRepliesContainer.innerHTML = replies.map(text => 
            `<button class="quick-reply-btn" onclick="chatbot.sendQuickReply('${text}')">${text}</button>`
        ).join('');
    }
    
    hideQuickReplies() {
        this.quickRepliesContainer.innerHTML = '';
    }
    
    sendQuickReply(text) {
        this.hideQuickReplies();
        this.input.value = text;
        this.sendMessage();
    }
    
    async sendMessage() {
        const message = this.input.value.trim();
        if (!message || this.isLoading) return;
        
        // Clear input
        this.input.value = '';
        this.sendBtn.disabled = true;
        this.hideQuickReplies();
        
        // Add user message
        this.addUserMessage(message);
        
        // Show typing indicator
        this.isLoading = true;
        this.showTypingIndicator();
        
        try {
            const token = localStorage.getItem('auth_token');
            const response = await fetch('/api/chat/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` })
                },
                body: JSON.stringify({
                    message,
                    sessionId: this.sessionId
                })
            });
            
            const data = await response.json();
            
            // Store session ID
            if (data.sessionId) {
                this.sessionId = data.sessionId;
            }
            
            // Hide typing and show response
            this.hideTypingIndicator();
            this.addBotMessage(data.reply || "I'm sorry, I couldn't process that. Please try again.");
            
        } catch (error) {
            console.error('Chat error:', error);
            this.hideTypingIndicator();
            this.addBotMessage(
                "I'm having trouble connecting right now. Please try again in a moment, or contact us at support@quickpasstrafficschool.com for immediate help."
            );
        }
        
        this.isLoading = false;
    }
    
    scrollToBottom() {
        requestAnimationFrame(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        });
    }
    
    clearChat() {
        this.messages = [];
        this.sessionId = null;
        localStorage.removeItem('chatbot_session');
        this.renderMessages();
        this.addBotMessage("Chat cleared! How can I help you today?");
        this.showQuickReplies();
    }
}

// Initialize chatbot when DOM is ready
let chatbot;
document.addEventListener('DOMContentLoaded', () => {
    // Load CSS
    if (!document.querySelector('link[href*="chatbot.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/css/chatbot.css';
        document.head.appendChild(link);
    }
    
    // Initialize chatbot
    chatbot = new ChatbotWidget();
});

// Export for global access
window.ChatbotWidget = ChatbotWidget;
