app = Flask(__name__)

CORS(app)
@app.route("/Project 3/static/js")
def covid():
    return app.send_static_file('index.html')

if __name__ == "main":
    app.run()