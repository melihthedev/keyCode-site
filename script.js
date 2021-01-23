const insert = document.getElementById("insert")


window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
    <div class="key">
            ${e.key === " " ? "Space" : e.key }
            <small>event.key</small>
    </div>
    <div class="key">
            ${e.keyCode}
            <small>eveny.keyCode</small>
    </div>
    <div class="key">
            ${e.codeu}
            <small>event.code</small>
    </div>
    `
})