# 💬 Realtime Chat – Socket.IO

A simple realtime chat application built using **Node.js**, **Express**, and **Socket.IO** to understand client–server architecture and WebSocket-based communication.

This project demonstrates how a single Node.js server maintains persistent connections with multiple browser clients and enables event-driven realtime messaging.

---

## 🚀 Overview

The application establishes a WebSocket connection between the server and multiple browser clients.  
Users can join with a username and exchange messages instantly across connected clients.

This project focuses on understanding:

- Server vs Client execution environments
- Persistent WebSocket connections
- Event-based communication using Socket.IO
- Broadcasting messages to multiple clients
- Managing user sessions in memory

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express, Socket.IO
- **Frontend:** HTML, Vanilla JavaScript
- **Communication:** WebSocket (via Socket.IO)
- **Development:** Nodemon

---

## 🏗 Architecture

Server: Node.js + Express + Socket.IO  
Client: Browser (HTML + JavaScript)  
Port: localhost:3000  

One server process handles multiple simultaneous client connections through persistent WebSocket sessions.

---

## 📂 Project Structure
# 💬 Realtime Chat – Socket.IO

A simple realtime chat application built using **Node.js**, **Express**, and **Socket.IO** to understand client–server architecture and WebSocket-based communication.

This project demonstrates how a single Node.js server maintains persistent connections with multiple browser clients and enables event-driven realtime messaging.

---

## 🚀 Overview

The application establishes a WebSocket connection between the server and multiple browser clients.  
Users can join with a username and exchange messages instantly across connected clients.

This project focuses on understanding:

- Server vs Client execution environments
- Persistent WebSocket connections
- Event-based communication using Socket.IO
- Broadcasting messages to multiple clients
- Managing user sessions in memory

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express, Socket.IO
- **Frontend:** HTML, Vanilla JavaScript
- **Communication:** WebSocket (via Socket.IO)
- **Development:** Nodemon

---

## 🏗 Architecture

Server: Node.js + Express + Socket.IO  
Client: Browser (HTML + JavaScript)  
Port: localhost:3000  

One server process handles multiple simultaneous client connections through persistent WebSocket sessions.

---

## 📂 Project Structure
Realtime-chat-socketio/
│
├── server.js # Node + Express + Socket.IO server
├── package.json
└── public/
└── index.html # Client UI

---

## ⚙️ Setup

### 1. Clone Repository
git clone https://github.com/Nancy2107/Realtime-chat-socketio.git
cd Realtime-chat-socketio

### 2. Install Dependencies

npm install

### 3. Start Server

npm run dev
Server runs on:
http://localhost:3000
Open the link in multiple browser tabs to test realtime messaging.

---

## 🎯 Features

- Realtime chat between multiple clients
- Username-based messaging
- Join and leave notifications
- Event-driven communication (emit / on)
- Broadcast messaging
- In-memory user management using Map
- Auto-restart using Nodemon

## 🧠 Key Concepts Practiced

- Difference between server-side and client-side execution
- WebSocket lifecycle and persistent connections
- Event-based architecture using Socket.IO
- Managing multiple concurrent connections
- Debugging server vs browser runtime errors

---

## 🔮 Possible Improvements

- Add chat rooms
- Persist messages in a database
- Add authentication
- Build a React frontend
- Deploy to cloud (Azure / Render / Railway)

---

## 👩‍💻 Author

Nancy Sheth  
Full Stack Developer
