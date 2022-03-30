let theme = "light";
const handleChangeTheme = ()=>{
  console.log("Trocar tema")
  if(theme == "light"){
      console.log("Este é o tema claro")
      theme = "dark"
      document.querySelector("button").innerText = "🌚"
      document.body.style.backgroundColor = "white"
  }else{
      document.querySelector("button").innerText = "🌞"
      document.body.style.backgroundColor = "#1e1e1e"
      console.log("Este é o tema escuro")
      theme = "light"
  }

}
