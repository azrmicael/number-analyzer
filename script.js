var values = [];

addEventListener('keypress', kpEvent);
function kpEvent(e) {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {
        addNum();
    }
}

function addNum() {
    res.innerHTML='';
    var n = window.document.querySelector('input#number').value;
    window.document.querySelector('input#number').value = '';
    window.document.querySelector('input#number').focus();
    console.log(`input: ${n}`);
    var nN = Number(n);
    var list = window.document.querySelector('select#list');
    
    if (n.length == 0 || nN == 0 || nN > 100 || nN < 0) {
        window.alert('Valor inválido. Forneça um número entre 0 e 100.');

    } else if (values.indexOf(nN) != -1) {
        window.alert('Valor já encontrado na lista.');

    } else {
        if (list[0].value == 'Adicione valores.') {
            list.remove(0);
        }

        values.push(nN);
        let option = window.document.createElement('option');
        option.innerHTML = `Valor ${nN} adicionado.`;
        list.appendChild(option);
        console.log(`values: ${values}`);
    } return values
}

function calc() {
    if (values.length == 0) {
        window.alert('Adicione valores antes de finalizar!')

    } else if (values.length == 1) {
        res.innerHTML = 
        `<p>Apenas o número ${values[0]} foi cadastrado.</p>`;

    } else {
        let regNumbers = values.length;

        /* 
        MINOR AND LARGER NUMBER (IN DETAILED FORM)
        let highestValue = values[0];
        let lowerValue = values[0];
        for (let pos in values) {
            if (values[pos] > highestValue) {
                highestValue = values[pos];
            }
            if (values[pos] < lowerValue) {
                lowerValue = values[pos];
            }
        }
        */

        // MINOR AND LARGER NUMBER (IN BRIEF)
        values = values.sort((a,b) => a-b);
        let highestValue = values[values.length-1];
        let lowerValue = values[0];
        //--
        
        let summedValues = 0;
        for (var i = 0; i < values.length; i++) {
            summedValues += values[i]; 
        }

        if (summedValues % 1 != 0) {
            summedValues = summedValues.toFixed(2);
        }

        let averageValues = summedValues / i;
        if (averageValues % 1 != 0) {
            averageValues = averageValues.toFixed(2);
        }

        res.innerHTML =
        `<p>Ao todo, temos ${regNumbers} números cadastrados.</p>
        <p>O menor valor informado foi ${lowerValue}.</p>
        <p>O maior valor informado foi ${highestValue}.</p>
        <p>Somados todos os valores, temos ${summedValues}.</p>
        <p>A média dos valores digitados é de ${averageValues}.</p>`;
    }
}

var i = 1;

function changeTheme() {
    var element = document.body;
    var themes = ["blue","dark-blue","pink","dark-pink"];
    if (i < themes.length) {
        element.className = themes[i];
        i++;
    } else if (i == themes.length) {
        i = 0;
        changeTheme()
    }
}