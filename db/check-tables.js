// Test the chat endpoint
const resp = await fetch('http://localhost:3000/api/chat/message', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'What courses do you offer?' })
});
console.log('Status:', resp.status);
const data = await resp.json();
console.log('Response:', JSON.stringify(data, null, 2));
process.exit(0);
