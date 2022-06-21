let next = "";
let prv = "";

let display = document.getElementById("result");
let allButton = document.getElementsByClassName("btn");
for (const key of allButton) {
  key.addEventListener("click", () => {
    switch (key.innerText) {
      case "AC":
        display.innerText = "";
        break;
      default:
        display.innerText += key.innerText;

        for (let i = 0; i < display.innerText.length; i++) {
          if (display.innerText * 1 == display.innerText) {
            prv = display.innerText;
          } 
         
          if (display.innerText[i] == "+"||display.innerText[i] == "-"||display.innerText[i] == "X"||display.innerText[i] == "/") {
            next =display.innerText.slice(i+1);
          }
        }
        console.log(next);

        console.log(prv);
    }
  });
}

equal_id.addEventListener("click",()=>{
  if(display.innerText.includes("+")){
    display.innerText =+prv+ +next

    prv=display.innerText;
  }
  else if(display.innerText.includes("-")){
    display.innerText =+prv- +next
    prv=display.innerText;

  }
  else if(display.innerText.includes("X")){
    display.innerText =+prv* +next
    prv=display.innerText;

  }
  else if(display.innerText.includes("/")){
    display.innerText =+prv/ +next
    prv=display.innerText;

  }
})


