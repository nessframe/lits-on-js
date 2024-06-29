document.addEventListener('DOMContentLoaded', (event) => {
    const ul = document.querySelector('#ul');
    const content = document.querySelector('.content');
    const deleteButtons = document.querySelector('.delete-buttons')

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputValue = [document.querySelector('#inputValue').value];

        for (let i = 0; i < inputValue.length; i++) {
        //  Добавляем значение инпута в ul
            let li = document.createElement("li");
            li.innerHTML = inputValue;
            ul.append(li);


        //  Создаем кнопку удаления
            const deleteButton = document.createElement('div');
            deleteButton.className = 'delete-button'
            deleteButton.innerHTML = 'x'
            deleteButtons.append(deleteButton)
            deleteButton.addEventListener('click', (event) => {
                li.remove()
                deleteButton.remove()
            })


        //  Кнопка которая удаляет весь список
            const button = document.querySelector('#button')
            button.addEventListener('click', (event) => {
                li.remove()
                deleteButton.remove()
            });
        }
    });
})