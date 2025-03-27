function setPrompt(text) {
    document.getElementById("prompt").value = text;
}

function generateImage() {
    let prompt = document.getElementById("prompt").value;
    let loading = document.getElementById("loading");
    let imageContainer = document.getElementById("image-container");
    let historyContainer = document.getElementById("history-container");

    if (prompt === "") {
        alert("Please enter a prompt!");
        return;
    }

    loading.classList.remove("hidden");
    imageContainer.innerHTML = "";

    setTimeout(() => {
        loading.classList.add("hidden");
        let randomNum = Math.floor(Math.random() * 1000);
        let imageUrl = `https://picsum.photos/400/300?random=${randomNum}`;

        let imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imageContainer.appendChild(imgElement);

        let historyImg = document.createElement("img");
        historyImg.src = imageUrl;
        historyContainer.prepend(historyImg);

    }, 2000);
}