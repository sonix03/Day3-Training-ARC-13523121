async function fetchPrice() {
    const coin = document.getElementById("coin").value.toLowerCase();
    const response = await fetch(`/crypto/${coin}`);
    const data = await response.json();
    
    if (data.error) {
        document.getElementById("result").innerText = "Error: " + data.error;
    } else {
        document.getElementById("result").innerText = `Price of ${data.coin.toUpperCase()}: $${data.price}`;
    }
}

async function fetchTrending() {
    const trendingCoins = ["bitcoin", "ethereum", "solana"];
    const container = document.getElementById("trending-prices");
    container.innerHTML = "Loading...";
    
    let html = "";
    for (const coin of trendingCoins) {
        try {
            const response = await fetch(`/crypto/${coin}`);
            const data = await response.json();
            
            if (!data.error) {
                html += `<p><strong>${data.coin.toUpperCase()}</strong>: $${data.price}</p>`;
            } else {
                html += `<p>Error fetching ${coin}</p>`;
            }
        } catch (error) {
            html += `<p>Error fetching ${coin}</p>`;
        }
    }
    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", fetchTrending);
