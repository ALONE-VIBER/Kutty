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