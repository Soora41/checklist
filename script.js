const todayTasks = [
    "Estudar 1 hora",
    "Praticar programação",
    "Projeto pessoal / trabalho",
    "Revisar progresso"
];

const weekTasks = [
    "Revisar aprendizados",
    "Organizar arquivos",
    "Planejar semana seguinte",
    "Descansar e resetar"
];

const listEl = document.getElementById("list");
const tabToday = document.getElementById("tab-today");
const tabWeek = document.getElementById("tab-week");

function loadList(type) {
    listEl.innerHTML = "";
    const tasks = type === "today" ? todayTasks : weekTasks;

    tasks.forEach((task, i) => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <input type="checkbox" id="${type}-${i}">
            <label for="${type}-${i}">${task}</label>
        `;
        listEl.appendChild(div);
    });
}

tabToday.addEventListener("click", () => {
    tabToday.classList.add("active");
    tabWeek.classList.remove("active");
    loadList("today");
});

tabWeek.addEventListener("click", () => {
    tabWeek.classList.add("active");
    tabToday.classList.remove("active");
    loadList("week");
});

loadList("today");
