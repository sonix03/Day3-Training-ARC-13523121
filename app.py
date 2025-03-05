from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

COINGECKO_API_URL = "https://api.coingecko.com/api/v3/simple/price"

@app.route("/crypto/<coin>", methods=["GET"])
def get_crypto_price(coin):
    params = {
        "ids": coin,
        "vs_currencies": "usd"
    }
    response = requests.get(COINGECKO_API_URL, params=params)
    
    if response.status_code == 200:
        data = response.json()
        if coin in data:
            return jsonify({"coin": coin, "price": data[coin]["usd"]})
        else:
            return jsonify({"error": "Coin not found"}), 404
    else:
        return jsonify({"error": "Failed to fetch data"}), 500

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
