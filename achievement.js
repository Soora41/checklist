const achievements = [
    { id: "a1", title: "Primeiro Passo", desc: "Completou 1 tarefa!", percent: 34 },
    { id: "a2", title: "Produtivo", desc: "Completou 2 tarefas!", percent: 67 },
    { id: "a3", title: "Máquina de Rotina", desc: "Completou tudo!", percent: 100 }
];

function loadAchievements() {
    const box = document.getElementById("achievementsContainer");

    achievements.forEach(a => {
        const div = document.createElement("div");
        div.className = "achievement";
        div.id = a.id;
        div.innerHTML = `<strong>${a.title}</strong><br><span>${a.desc}</span>`;
        box.appendChild(div);
    });
}

function checkAchievements(percent) {
    achievements.forEach(a => {
        if (percent >= a.percent) {
            document.getElementById(a.id).classList.add("unlocked");
            localStorage.setItem(a.id, "unlocked");
        } else {
            document.getElementById(a.id).classList.remove("unlocked");
        }
    });
}

window.onload = () => {
    loadAchievements();

    achievements.forEach(a => {
        if (localStorage.getItem(a.id) === "unlocked") {
            document.getElementById(a.id).classList.add("unlocked");
        }
    });
};
