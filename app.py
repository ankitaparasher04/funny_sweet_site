from flask import Flask, render_template
import random

app = Flask(__name__)

notes = [
    "You are doing better than you think 💖",
    "You matter more than you know 🌍",
    "You deserve happiness ✨",
    "Keep smiling, it suits you 😊",
    "You’re stronger than your doubts 💪"
]

@app.route("/")
def home():
    # note = random.choice(notes)
    return render_template("index.html")

# @app.route("/page2")
# def page2():
#     return render_template("page2.html")

if __name__ == "__main__":
    app.run()