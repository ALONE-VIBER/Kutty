document.querySelector("button").addEventListener("click",()=>{
    const p = document.createElement("p");
    p.textContent = "hai i am son of button";

    document.querySelector("body").insertBefore(p,document.querySelector("button"));
})