let doesTableExist = false
function makeTable(arr) {
    if (doesTableExist === false) {
        for (let i = 0; i < arr.length; i++) {
            let tableRow = document.createElement("TR")
            let letter = arr[i].letter;
            let percentage = arr[i].percent.toFixed(2) + '%'
            let number = arr[i].num;
            for (let j = 0; j < 3; j++) {
                let element = document.createElement("TD");
                let elementText;
                switch (j) {
                    case j = 0:
                        elementText = document.createTextNode(letter)
                        break;
                    case j = 1:
                        elementText = document.createTextNode(percentage)
                        break;
                    case j = 2:
                        elementText = document.createTextNode(number)
                        break;
                }
                element.appendChild(elementText)
                tableRow.appendChild(element)
            }
            document.getElementById('letterlist').appendChild(tableRow)
        }
        doesTableExist = true;
    }
    else if (doesTableExist == true) {
        let table = document.getElementById('letterlist')

        for (let i = 0; i < (table.rows.length-1); i++) {
            let letter = arr[i].letter;
            let percentage = arr[i].percent.toFixed(2) + '%'
            let number = arr[i].num;
            for (let j = 0; j < table.rows[i].cells.length; j++) {
                switch (j) {
                    case j = 0:
                        table.rows[i+1].cells[j].innerHTML = letter
                        break;
                    case j = 1:
                        table.rows[i+1].cells[j].innerHTML = percentage
                        break;
                    case j = 2:
                        table.rows[i+1].cells[j].innerHTML = number
                        break;
                }
            }
        }
    }
}
/*
function sortToAlphabetical(data) {
    let table = document.getElementById('letterlist')

    for (let i = 0; i < (table.rows.length - 1); i++) {
        let letter = arr[i].letter;
        let percentage = arr[i].percent.toFixed(2) + '%'
        let number = arr[i].num;
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            switch (j) {
                case j = 0:
                    table.rows[i + 1].cells[j].innerHTML = letter
                    break;
                case j = 1:
                    table.rows[i + 1].cells[j].innerHTML = percentage
                    break;
                case j = 2:
                    table.rows[i + 1].cells[j].innerHTML = number
                    break;
            }
        }
    }
}
*/
