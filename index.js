const list = document.querySelectorAll("li");
const highLight = document.createElement("span")

document.body.append(highLight);
highLight.classList.add("highLight")





function lists(){
    this.classList.add("block")
    setTimeout(()=> {
        this.classList.add("show")
    },150)
    const dropdown = this.querySelector(".dropdown-content")
    const move = dropdown.getBoundingClientRect()
    highLight.style.width =` ${move.width}px`;
    highLight.style.height =` ${move.height}px`;
    highLight.style.transform = `translate(${move.left}px, ${move.top}px)`;

}

function remover(){

    this.classList.remove("block")
    this.classList.remove("show")
    highLight.style.width = "0px";
    highLight.style.height = "0px";
    highLight.style.transform =  "translate(900px, -100px)"
    

}



list.forEach( list => list.addEventListener("mouseenter", lists))
list.forEach( list => list.addEventListener("mouseleave", remover))