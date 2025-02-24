const trackerList = [];

function newExpense(){
    const inputElement = document.querySelector('.js-input')
    const type = inputElement.value

    const numberInputElement = document.querySelector('.js-number')
    const amount = numberInputElement.value

    const dateInputElement = document.querySelector('.js-date')
    const date = dateInputElement.value

    trackerList.push({ type, amount, date });
    const html = `<tbody>
                        <td>
                            <input class="js-input" type="text">
                        </td>
                        <td>
                            <input class="js-number" type="number" min="0">
                        </td>
                        <td>
                            <input class="js-date" type="date">
                        </td>
                </tbody>`
    /*for(let i = 0; i <trackerList.length; i++){
        const expenseObject = trackerList[i]
        let html = `
        <p>
            ${expenseObject}
            <button>Delete</button>
        </p>
        `
       
    }*/

    console.log(trackerList)

}
