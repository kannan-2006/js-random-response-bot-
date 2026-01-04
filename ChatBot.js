let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerElement = document.getElementById("chatContainer");
let msgBtnelement = document.getElementById("sendMsgBtn");
let userInputElement = document.getElementById("userInput");
msgBtnelement.onclick = function() {
    let userInputvalue = userInputElement.value;
    let lengthOfArray = chatbotMsgList.length;
    let randomIndex = Math.ceil(Math.random() * lengthOfArray);
    userInputElement.value = "";
    let divContainer1 = document.createElement("div");
    divContainer1.classList.add("msg-to-chatbot-container");
    chatContainerElement.appendChild(divContainer1);

    let spanElement1 = document.createElement("span");
    spanElement1.classList.add("msg-to-chatbot");
    spanElement1.textContent = userInputvalue;
    divContainer1.appendChild(spanElement1);

    let divContainer2 = document.createElement("div");
    divContainer1.classList.add("msg-from-chatbot-container");
    chatContainerElement.appendChild(divContainer2);

    let spanElement2 = document.createElement("span");
    spanElement2.classList.add("msg-from-chatbot");
    spanElement2.textContent = chatbotMsgList[randomIndex];
    divContainer2.appendChild(spanElement2);
};