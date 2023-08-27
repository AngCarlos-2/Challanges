document.addEventListener("DOMContentLoaded", function() {
    const res = document.getElementById("num");
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.textContent;
            
            if (buttonText === "C" || buttonText === "CE") {
                res.value = "0";
            } else if (buttonText === "=") {
                try {
                    res.value = eval(res.value);
                } catch (error) {
                    res.value = "Erro";
                }
            } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
                if (res.value !== "0" && res.value !== "Erro") {
                    res.value += " " + buttonText + " ";
                }
             } else if (buttonText === "%") {
                if (res.value !== "0" && res.value !== "Erro") {
                    res.value = eval(res.value + " /100"); 
                }
            } else {
                if (res.value === "0" || res.value === "Erro") {
                    res.value = buttonText;
                } else {
                    res.value += buttonText;
                }
            }
        });
    });
});