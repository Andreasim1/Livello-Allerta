async function fetchAlertLevel() {
    try {
        const response = await fetch('livello.json?' + new Date().getTime());
        const data = await response.json();
        const level = data.livello;

        const alertBox = document.getElementById("alert-box");
        const levels = ["🟢 Nessuna Allerta", "🟡 Livello 1 - Attenzione", "🟠 Livello 2 - Pre Allarme", "🔴 Livello 3 - Allarme"];
        const colors = ["#00FF00", "#FFD700", "#FFA500", "#FF0000"];

        alertBox.textContent = levels[level];
        alertBox.style.backgroundColor = colors[level];
    } catch (error) {
        console.error("Errore nel caricamento del livello di allerta:", error);
        document.getElementById("alert-box").textContent = "Errore nel caricamento dell'allerta.";
    }
}

// Funzione per aggiornare il livello di allerta
function updateAlert(level) {
    const data = { livello: level };

    localStorage.setItem("livello", JSON.stringify(data)); // Salva localmente per la sessione
    fetchAlertLevel();
}

// Carica il livello di allerta all’avvio
fetchAlertLevel();
