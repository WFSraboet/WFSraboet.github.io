const messages = ["Baik","Siap"];
let counter = 0;
const chatContainer = document.querySelector(".container");
const chatArea = document.querySelector(".message-body");
const mscroll = document.querySelector(".wrapper");
const text = document.querySelector("#text");
const form = document.querySelector(".form");

function scroll() {
  mscroll.scroll(0,mscroll.scrollHeight);
}

function reply(msg) {
  let li = document.createElement("li");
  li.innerHTML = msg;
  li.classList.add("chatbox");
  li.classList.add("chatbox-incoming");
  chatArea.append(li);
  scroll();
}

//EVENT LISTENERS

form.addEventListener("submit", e => {
  e.preventDefault();
  msg = text.value;
  let li = document.createElement("li");
  li.innerHTML = msg;
  li.classList.add("chatbox");
  li.classList.add("chatbox-outgoing");
  chatArea.append(li);
  scroll();
  text.value = "";
  chatContainer.scrollTop =chatContainer.scrollHeight;
  text.focus();
  setTimeout(reply, 500, messages[counter]);
  counter++;
  if (counter == messages.length) {
    counter = 0;
  }
});