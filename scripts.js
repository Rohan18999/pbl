const trackerList = JSON.parse(localStorage.getItem("expenses")) || [];

function saveContent(){
    localStorage.setItem("expenses", JSON.stringify(trackerList));
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
                <button>Edit</button>
                <button onclick="removeElement(${index})">Delete</button>
            </td>
        </tr>
        `);
    });
}

function removeElement(index){
    trackerList.splice(index,1);
    saveContent();
    displayContent();
}

document.addEventListener("DOMContentLoaded", displayContent);

const incomeList =  JSON.parse(localStorage.getItem("expenses")) || [];
function submitIncome(){
    
}