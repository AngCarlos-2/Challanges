document.addEventListener("DOMContentLoaded", function () {
    const cb1 = document.querySelector("#selUn");
    const cb2 = document.querySelector("#selUn2");
    const c = document.querySelector('#num');
    const res = document.querySelector('#ans');
    const buttons = document.querySelectorAll('.conv, .others');

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = this.textContent;

            const valor1 = cb1.value;
            const valor2 = cb2.value;

            if (buttonText === 'Converter') {
                if (!valor1 || !valor2 || c.value.trim() === '') {
                    alert("AVISO: Há informações vazias ou incompletas!");
                } else {
                    if (cb1.value === 'D' && /^[0-9]+$/.test(c.value)) {
                        if (cb2.value === 'B') {
                            const decimalValue = parseInt(c.value, 10);
                            const binaryValue = decimalValue.toString(2);
                            res.value = binaryValue;
                        } else if (cb2.value === 'H' && /^[0-9]+$/.test(c.value)) {
                            const decimalValue = parseInt(c.value, 10);
                            const hexaValue = decimalValue.toString(16);
                            res.value = hexaValue;
                        }
                    } else if (cb1.value === 'B' && /^[0-1]+$/.test(c.value)) {
                        if (cb2.value === 'D') {
                            const binaryValue = parseInt(c.value, 2);
                            const decimalValue = binaryValue.toString(10);
                            res.value = decimalValue;
                        } else if (cb2.value === 'H') {
                            const binaryValue = parseInt(c.value, 2);
                            const hexaValue = binaryValue.toString(16);
                            res.value = hexaValue;
                        }
                    } else if (cb1.value === 'H' && /^[0-9][a-f]+$/.test(c.value)) {
                        if (cb2.value === 'D') {
                            const hexaValue = parseInt(c.value, 16);
                            const decimalValue = hexaValue.toString(10);
                            res.value = decimalValue;
                        } else if (cb2.value === 'B') {
                            const hexaValue = parseInt(c.value, 16);
                            const binaryValue = hexaValue.toString(2);
                            res.value = binaryValue;
                        }
                    }
                }
            } else if (buttonText === 'Apagar') {
                cb1.value = '';
                cb2.value = '';
                c.value = '';
                res.value = '';
            } else if (buttonText === 'Inverter') {
                const values = [cb1.value, cb2.value];
                cb1.value = values[1];
                cb2.value = values[0];
            }
        });
    });
});

