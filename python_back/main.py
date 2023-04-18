from flask import Flask, request

app = Flask(__name__)


@app.route("/api/analyse", methods=['POST'])
def parse_image():
  data = request.json['file']
  return data


if __name__ == "__main__":
  app.run(port=6666, host="localhost", debug=True)
