window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn')
    const expenseInputElement = document.getElementById('expense')
    const amountInputElement = document.getElementById('amount')
    const dateInputElement = document.getElementById('date')
    const previewListElement = document.getElementById('preview-list')
    const expenseListElement = document.getElementById('expenses-list');
    const deleteButtonElement = document.querySelector('.btn.delete');

    addButtonElement.addEventListener('click', () => {
        const expense = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        if (!expense || !amount || !date) {
            return;
        }

        const expenseLiElement = createArticleElement(expense, amount, date);
        previewListElement.appendChild(expenseLiElement);

        addButtonElement.setAttribute('disabled', 'disabled')

        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';

        const editButtonElement = expenseLiElement.querySelector('.btn.edit')
        const okButtonElement = expenseLiElement.querySelector('.btn.ok')

        editButtonElement.addEventListener('click', () => {
            // send data to inputs
            expenseInputElement.value = expense;
            amountInputElement.value = amount;
            dateInputElement.value = date;

            // Clear preview (should remove event listeners also)
            expenseLiElement.remove();

            // Enable add button
            addButtonElement.removeAttribute('disabled');
        });
        okButtonElement.addEventListener('click', () => {
            // remove buttons from expense item
            const expenseButtonsElement = expenseLiElement.querySelector('.buttons');
            expenseButtonsElement.remove();

            // move expense item to expense list
            expenseListElement.appendChild(expenseLiElement);

            // enable add button
            addButtonElement.removeAttribute('disabled');
        });
    });
    function createArticleElement(expense, amount, date) {
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`;

        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`;

        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('btn', 'edit');
        editBtnElement.textContent = 'edit';

        const okBtnElement = document.createElement('button');
        okBtnElement.classList.add('btn', 'ok');
        okBtnElement.textContent = 'ok ';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editBtnElement);
        buttonsDivElement.appendChild(okBtnElement);

        const liExpenseElement = document.createElement('li');
        liExpenseElement.classList.add('expense-item');
        liExpenseElement.appendChild(articleElement, buttonsDivElement);
        liExpenseElement.appendChild(buttonsDivElement);

        return liExpenseElement;

    }
}