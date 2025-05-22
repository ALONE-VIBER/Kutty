// function to load data from csv
async function loadUsers() {
        const response = await fetch('/api/users');
        const users = await response.json();
        const mainDiv = document.getElementById('main');
        mainDiv.innerHTML = '';
        users.forEach(user => {
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.textContent = user;
            div.appendChild(p);
            mainDiv.appendChild(div);
        });
    }
window.onload = loadUsers;


async function addDiv(event){
    event.preventDefault();
    const maindiv = document.querySelector("#main");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const userIn = document.querySelector('form input[name="user"]');
    p.textContent = userIn.value;
    div.appendChild(p);
    maindiv.appendChild(div);  

    // send data to bacjend using fetch
    await fetch("/search",{
        method: "POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify({user:userIn.value })
    });
}

document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const userIn = document.querySelector('input[name="user"]').value;
    const dateIn = document.querySelector('input[name="date"]').value;
    const timeIn = document.querySelector('input[name="time"]').value;

    // Optionally display on page (update as needed)
    // const maindiv = document.querySelector("#main");
    // const div = document.createElement("div");
    // const p = document.createElement("p");
    // p.textContent = `${userIn} (${dateIn} ${timeIn})`;
    // div.appendChild(p);
    // maindiv.appendChild(div);

    // Send data to backend using fetch
    await fetch("/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userIn, date: dateIn, time: timeIn })
    });
    await loadUsers();
    document.getElementById("searchForm").reset();
});