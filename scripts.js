const trackerList = JSON.parse(localStorage.getItem("expenses")) || [];
let totalIncome = parseFloat(localStorage.getItem("totalIncome")) || 0;
let totalExpense = parseFloat(localStorage.getItem("totalExpense")) || 0;
let totalBalance = parseFloat(localStorage.getItem("totalBalance")) || 0;

function saveContent(){
    localStorage.setItem("expenses", JSON.stringify(trackerList));
    localStorage.setItem("totalIncome", totalIncome)
    localStorage.setItem("totalExpense", totalExpense)
    localStorage.setItem("totalBalance", totalBalance)
}


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

    if (name && amount && category && date){
        trackerList.push(
            {
                name,
                amount,
                category,
                date
            }
        )
        saveContent();
        displayContent();
        addDetails();
    } else {
        alert("⚠️ Warning! Something went wrong.");
    }
}

function displayContent(){
    const list = document.getElementById('expense-list')
    list.innerHTML = ''
    trackerList.forEach((value,index) => {
    list.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${value.name}</td>
            <td>${value.amount}</td>
            <td>${value.category}</td>
            <td>${value.date}</td>
            <td>
                <button class="delete-button" onclick="removeElement(${index})">Delete</button>
            </td>
        </tr>
        `);
    });
}

function removeElement(index){
    if (index >= 0 && index < trackerList.length) {
        if (trackerList[index].category === "Income"){
            totalIncome -= parseFloat(trackerList[index].amount || 0);  
        } else {
            totalExpense -= parseFloat(trackerList[index].amount || 0);
        }
        trackerList.splice(index,1);  
    }
    saveContent();
    displayContent();
    addDetails();
}

document.addEventListener("DOMContentLoaded", () =>{
    displayContent();
    addDetails();
});
document.addEventListener("DOMContentLoaded",totalIncome,totalExpense,totalBalance)

function addDetails(){
    let totalIncomeElement = document.querySelector('.total-income')
    let totalExpenseElement = document.querySelector('.total-expense')
    let totalBalanceElement = document.querySelector('.total-balance')
    let totalIncome = 0
    let totalExpense = 0
    let totalBalance = 0
    trackerList.forEach((value) =>{
        if (value.category === "Income"){
            totalIncome+= parseFloat(value.amount || 0)
        } else {
            totalExpense+= parseFloat(value.amount || 0)
        }
    })
    totalBalance = totalIncome - totalExpense
    totalIncomeElement.innerText = totalIncome
    totalExpenseElement.innerText = totalExpense
    totalBalanceElement.innerText = totalBalance

    saveContent();
}