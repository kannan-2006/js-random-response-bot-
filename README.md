# js-random-response-bot-
 # 🤖 Dynamic ChatBot Interface

Here’s a responsive web app that feels like a real messaging platform. The main idea? Play around with DOM manipulation and event handling to keep messages flowing smoothly between you and the bot.

## ✨ Features

* **User Messaging:** Type a message, hit send, and see it appear as a chat bubble.
* **Randomized Bot Responses:** The bot picks a reply at random from its list and sends it right back.
* **Styled Chat Bubbles:** Custom CSS makes your messages show up on the right, bot messages on the left.
* **Responsive UI:** Thanks to Bootstrap 4, the chat stays centered and the input bar sticks to the bottom.
* **Interactive Icons:** Font Awesome gives the “Send” button a crisp, modern icon.

## 🛠️ Built With

* **HTML5:** Sets up the chat window, input bar, and avatar images.
* **CSS3:** Handles the unique style for both user and bot bubbles, plus fonts.
* **Bootstrap 4:** Used mostly for flexbox and layout tricks.
* **JavaScript (Vanilla):** Does all the work behind the scenes—creates elements, adds classes, and handles random replies.

## 🚀 How It Works

Everything starts when you click the “Send” button:

1. **Capture Input:** The script grabs your message from the userInput field.
2. **User Message Creation:**  
   * It creates a new div, styles it, and puts your text inside as a bubble.
3. **Bot Response Logic:**  
   * Clears your message out of the input field.  
   * Picks a random number to select a bot reply from the chatbotMsgList array.  
   * Builds the bot’s bubble and adds it to the chat.

## 📂 Project Structure

* `ChatBot.html`: Holds the structure—the chat window and input bar.
* `ChatBot.css`: Styles the bubbles, sets the fonts, keeps things looking sharp.
* `ChatBot.js`: Controls message flow and picks random replies.
