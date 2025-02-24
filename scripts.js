const trackerList = [
    {
        type: type,
        amount: amount,
        date: date
    }
];

function newExpense(){
    const inputElement = document.querySelector('.js-input')
    const type = inputElement.value

    const numberInputElement = document.querySelector('.js-number')
    const amount = numberInputElement.value

    const dateInputElement = document.querySelector('.js-date')
    const date = dateInputElement.value

    trackerList.push({
        type,
        amount,
        date
    })

    /*for(let i = 0; i <trackerList.length(); i++){
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
