let step = 0;

const steps = [
    {
        img: "warning.png",
        title: "⚠️ Warning",
        text: "This may make you laugh 😂"
    },
    {
        img: "roast.png",
        title: "😂 Roast",
        text: "You're not lazy… just charging 😆"
    },
    {
        img: "challenge.png",
        title: "🎯 Challenge",
        text: "Still clicking? Interesting 😏"
    },
    {
        img: "twist.png",
        title: "🤔 Wait",
        text: "You didn’t give up..."
    },
    {
        img: "compliment.png",
        title: "💖 Truth",
        text: "You're actually amazing ✨"
    },
    {
        img: "note.png",
        title: "📝 Note",
        text: "You matter more than you think 💕"
    },
    {
        img: "final.png",
        title: "🎉 Done",
        text: "You smiled, didn’t you? 😄"
    }
];

function loadStep() {
    document.getElementById("img").src = "/static/images/" + steps[step].img;
    document.getElementById("title").innerText = steps[step].title;
    document.getElementById("text").innerText = steps[step].text;
}

function nextStep() {
    step++;
    if (step >= steps.length) step = 0;
    loadStep();
}

// load first step
loadStep();