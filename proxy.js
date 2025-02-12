async function fetchUrl() {
    const url = document.getElementById('url').value;
    if (!url) return alert("Please enter a URL.");

    try {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById('response').textContent = data;
    } catch (error) {
        document.getElementById('response').textContent = "Error: " + error.message;
    }
}
