function toggleChat() {
  var e = document.getElementById("chat-box");
  if (e.classList.contains("open")) {
      e.classList.remove("open");
      e.classList.add("closed");
  } else {
      e.classList.remove("closed");
      e.classList.add("open");
      fitChatWindowToScreen();
  }
}

function fitChatWindowToScreen() {
  var chatBox = document.getElementById("chat-box");
  chatBox.style.height = "calc(100vh - 120px)";
}

function initializeChatWidget(e) {
  let chatContainer = document.createElement("div");
  chatContainer.id = "chat-container";
  let chatBubble = document.createElement("div");
  chatBubble.id = "chat-bubble";
  chatBubble.onclick = toggleChat;
  chatBubble.innerHTML = '<img src="https://media.discordapp.net/attachments/950437905137016932/1241077455066894406/a-sleek-and-modern-ai-logo-featuring-a-stylized-ab-RgGT44BDT7OsZdn7VVqY4w-eUbecBq3RO69rjWWvLYutA.jpeg?ex=66498bb3&is=66483a33&hm=7a075a3eb8985de57d5088073f5f4c31ee80376f56a632c8874c9168677b9136&=&format=webp&width=280&height=280" alt="Quiva Image">';
  let chatBox = document.createElement("div");
  chatBox.id = "chat-box";
  chatBox.classList.add("closed");

  // If you want to use on Local then replace the following URL with http://localhost:<port>/test.html
  let chatScreen = "https://quiva.quivoxstudio.cloud/support/chat.html";
  chatBox.innerHTML =
      '<iframe src="' +
      chatScreen +
      '" style="height: 100%; width: 100%;" frameborder="0"></iframe>';
  chatContainer.appendChild(chatBubble);
  chatContainer.appendChild(chatBox);
  document.body.appendChild(chatContainer);
}

function loadCSS() {
  var style = document.createElement('style');
  style.innerHTML = `
.closed,
.open {
transition: opacity 0.1s ease-in-out;
}
#chat-container {
position: fixed;
bottom: 20px;
right: 20px;
z-index: 9999;
}
.open {
opacity: 1;
visibility: visible;
}
.closed {
opacity: 0;
visibility: hidden;
}
#chat-bubble {
display: flex;
align-items: center;
justify-content: center;
color: #fff; /* Text color for better contrast with neon background */
border-radius: 50%;
cursor: pointer;
width: 60px;
height: 60px;
font-family: Arial, sans-serif;
box-shadow: rgba(0, 77, 255, 0.5) 0 4px 24px;
transition: all 0.3s ease-in-out;

background: linear-gradient(135deg, #a8e063 0%, #56ab2f 100%);
}
#chat-bubble img {
max-width: 100%;
max-height: 100%;
}
#chat-bubble:hover {
transform: scale(1.2);
}
#chat-box {
position: absolute;
bottom: 72px;
right: 0;
width: 450px;
height: 600px;
background-color: #fff;
overflow: auto;
text-align: right;
border-radius: 20px;
box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
border: 1px solid #d2d2d2;
}
@media (max-width: 767px) {
  #chat-box {
    width: calc(100vw - 40px);
    height: calc(100vh - 120px);
  }
}
}

          `;
  document.head.appendChild(style);
}

loadCSS();
