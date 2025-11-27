const tasks = ["t1", "t2", "t3"];
const xpPerTask = 10;

function load() {
    tasks.forEach(t => {
        let cb = document.getElementById(t);
        cb.checked = localStorage.getItem(t) === "true";

        cb.addEventListener("change", () => {
            localStorage.setItem(t, cb.checked);
            calculateXP();
            updateWeekProgress();
        });
    });

    calculateXP();
    updateWeekProgress();
}

function calculateXP() {
    let xp = 0;
    tasks.forEach(t => {
        if (localStorage.getItem(t) === "true") xp += xpPerTask;
    });
    localStorage.setItem("xp", xp);
    document.getElementById("xpValue").innerText = xp + " XP";
}

function updateWeekProgress() {
    let count = tasks.filter(t => localStorage.getItem(t) === "true").length;
    let percent = Math.round((count / tasks.length) * 100);

    document.getElementById("weekProgress").style.width = percent + "%";
    document.getElementById("weekPercent").innerText = percent;

    localStorage.setItem("weekProgress", percent);

    checkAchievements(percent);
}

function fullReset() {
    tasks.forEach(t => localStorage.setItem(t, "false"));
    localStorage.setItem("xp", 0);
    localStorage.setItem("weekProgress", 0);

    location.reload();
}

load();
