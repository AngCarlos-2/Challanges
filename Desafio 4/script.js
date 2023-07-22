function confirm () {
    let nome = document.getElementById("txtNome");
    let num = document.getElementById('txtNum')
    let end = document.getElementById('txtEnd')
    let rc = document.getElementsByTagName('pc')
    let s = document.querySelector('#salad')
    let sld = s.options[s.selectedIndex].value; 

    if (nome.value.length == 0 && num.value.length == 0 && end.value.length == 0 && !(rc[0].checked || rc[1].checked || rc[2].checked) && !(sld == 'AT' || sld == 'ATC' || sld == 'CRR' || sld == 'S/')) {
        window.alert("Alguns campos não estão preenchidos ou estão incorretos!")
    } else {
        window.alert("Pedido enviado com sucesso!");
    } 
} 