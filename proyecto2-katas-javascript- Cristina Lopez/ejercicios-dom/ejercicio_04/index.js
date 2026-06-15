//4.1
const btn = document.createElement("button")

btn.id = "btnToClick";
btn.textContent = "Click aquí"
btn.addEventListener("click", (ev) => {
    console.log(ev)
})

//4.2
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", (ev) => {
    console.log(ev.target.value);
});

//4.3
const input = document.querySelectorAll("input");

for (const input of inputs) {
    input.addEventListener("input", (ev) => {
        console.log(ev.target.value);
    });
}