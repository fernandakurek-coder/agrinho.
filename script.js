// script.js
let score = 0;
let energy = 100;
let growthLevel = 0;
let plantStages = ["🌱", "🌿", "🌳", "🌴"];

function updatePlant() {
    const plantEl = document.getElementById("plant");
    const stageEl = document.getElementById("plant-stage");
    
    const stageIndex = Math.min(Math.floor(growthLevel / 25), 3);
    plantEl.textContent = plantStages[stageIndex];
    stageEl.textContent = ["Semente", "Plântula", "Planta Jovem", "Planta Forte"][stageIndex];
}

function applyNano(type) {
    if (energy <= 0) return alert("Sem energia nano! Reinicie o jogo.");
    
    energy -= 15;
    document.getElementById("energy").textContent = energy;
    
    if (type === "fertilizer") {
        growthLevel += 22;
        score += 35;
    } else if (type === "sensor") {
        growthLevel += 12;
        score += 20;
        energy += 8; // sensores são eficientes
    } else if (type === "pesticide") {
        growthLevel += 18;
        score += 28;
    }
    
    document.getElementById("score").textContent = score;
    updatePlant();
    
    if (growthLevel >= 100) {
        setTimeout(() => {
            alert("🎉 Parabéns! Sua fazenda nano alcançou o nível máximo! Você é um verdadeiro NanoAgricultor do futuro.");
        }, 600);
    }
}

function resetGame() {
    score = 0;
    energy = 100;
    growthLevel = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("energy").textContent = energy;
    updatePlant();
}

function showDetail(index) {
    const messages = [
        "Nanofertilizantes entregam nutrientes exatamente onde a planta precisa. Reduzem desperdício em até 50%!",
        "Nanopesticidas só ativam quando detectam a praga. Protegem as abelhas e o meio ambiente.",
        "Nanosensores monitoram umidade, nutrientes e saúde da planta 24h. Agricultura de precisão real!"
    ];
    alert(messages[index]);
}

function toggleDarkMode() {
    document.body.classList.toggle("light-mode");
    // Simples toggle de tema (pode expandir)
    alert("🌟 Modo claro/escuro ativado! (Funcionalidade expandida em produção)");
}

// Inicialização
window.onload = () => {
    updatePlant();
    
    // Troca aleatória de imagens hero (simulando IA gerada)
    const heroImages = [
        "https://picsum.photos/id/1015/800/600",
        "https://picsum.photos/id/201/800/600",
        "https://picsum.photos/id/133/800/600"
    ];
    let current = 0;
    setInterval(() => {
        current = (current + 1) % heroImages.length;
        document.getElementById("hero-img").src = heroImages[current];
    }, 8000);
    
    console.log("%cNanoAgro carregado com sucesso! 🌱", "color:#00ff9d; font-size:14px");
};