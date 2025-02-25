const trackerList = []
function newExpense(event){
    event.preventDefault()
    const expenseElement = document.getElementById('expense-name')
    const name = expenseElement.value

    const AmountElement = document.getElementById('expense-amount')
    const amount = AmountElement.value

    const categoryElement = document.getElementById('expense-category')
    const category =categoryElement.value

    const dateElement = document.getElementById('expense-date')
    const date = dateElement.value

    trackerList.push(
        {
            name,
            amount,
            category,
            date
        }
    )
    const list = document.getElementById('expense-list')
    list.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${name}</td>
            <td>${amount}</td>
            <td>${category}</td>
            <td>${date}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        `);
}