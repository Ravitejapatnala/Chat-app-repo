var socket=io();

let username="";
const joinChat= document.getElementById("join-chat");
const usernameinput= document.getElementById("username-input");
const form= document.getElementById("form");
const chatRoomContainer= document.querySelector(".chatroom-container");
const messageInput= document.getElementById("message-input");
const sendButton= document.getElementById("send-message");
const messageContainer= document.querySelector(".messages-container");

joinChat.addEventListener('click', (event)=>{
    event.preventDefault()//preventing the form to get refreshed whenever the button is clicked.
    event.stopPropagation();
    username= usernameinput.value;
    if(username){
        form.style.display= "none";
        chatRoomContainer.style.display= "block";
    }
})

function renderMessage(dataObj, typeofMsg){
    const msgDiv= document.createElement("div");
    msgDiv.innerText= `${dataObj.username} : ${dataObj.message}`;
    if(typeofMsg==="SENT")
    {
        msgDiv.setAttribute("class", "message sent");
    }
    else
    {
        msgDiv.setAttribute("class", "message");
    }
    messageContainer.append(msgDiv);
    messageInput.value="";
}
sendButton.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    let data={
        id: socket.id,
        message: messageInput.value,
        username: username,
    }
    socket.emit('this is a msg event', data);
    renderMessage(data, "SENT")
})

//for receiving

socket.on("this is a msg event", (data)=>{
    /**Here if my sending device and
     * receiving device is same we dont
     * need to call this fn
     */
    if(socket.id!==data.id){
        renderMessage(data, "REC");
    }
})