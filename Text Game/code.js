const textElement = document.getElementById("text");
const optionBtn = document.getElementById("optionBtn");
let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionBtn.firstChild) {
    optionBtn.removeChild(optionBtn.firstChild);
  }
  
  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("buttons");
      button.addEventListener("click", () => selectOption(option));
      optionBtn.appendChild(button);
    }
  });
}

function selectOption(option) {
  const nextTextNode = option.nextText;
  if (nextTextNode <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNode);
}

function showOption(option) {
  return option.requireState == null || option.requireState(state);
}

const textNodes = [
  {
    id: 1,
    text: "This is a survival adventure game, the goal is for you to survive by making choices amoung the options you will be given. Can you Survive?",
    options: [
      {
        text: "PLAY",
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "It's mid-day you are in a forest on the ground you see three items (A Machatte, A ligher, and A fishing line), but you can only carry two items at a time.",
    options: [
      {
        text: "Lighter and Machatte"
      },
      {
        text: "Machatte and"
      }
    ]
  }
];

startGame();