
const btn = document.querySelector("#btn1")
const btnColor = btn.style.backgroundColor;
const pagina = document.querySelector("#page")




btn.addEventListener("click", () =>{
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    
    var rgb = `rgba(${r}, ${g}, ${b}, .3)`
    var rgbBtn= `rgba(${r}, ${g}, ${b}, .8)`
    var rgbText = `rgb(${236-r}, ${236-g}, ${236-b})`

   pagina.style.backgroundColor = rgb
   btn.style.backgroundColor = rgbBtn
   btn.style.color = rgbText
   
}


)



