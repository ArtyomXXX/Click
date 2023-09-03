// Массив данных кнопок
const buttonData = [
    {id: 'btn-1', color: 'green', text: 'Здание 1'},
    {id: 'btn-2', color: 'green', text: 'Здание 2'},
    {id: 'btn-3', color: 'green', text: 'Здание 3'},
    {id: 'btn-4', color: 'green', text: 'Здание 4'},
    {id: 'btn-5', color: 'blue', text: 'Здание 5'},
    {id: 'btn-6', color: 'blue', text: 'Здание 6'},
    {id: 'btn-7', color: 'blue', text: 'Здание 7'},
    {id: 'btn-8', color: 'blue', text: 'Здание 8'},
    {id: 'btn-9', color: 'blue', text: 'Здание 9'},
    {id: 'btn-10', color: 'blue', text: 'Здание 10'},
];

const buttonsContainer = document.getElementById('buttons-container'); 

// Создание кнопок на странице с использованием массива данных
for (let data of buttonData) {
    const button = document.createElement('button');
    button.id = data.id;
    button.className = `button ${data.color}-button`;
    const span = document.createElement('span');
    span.className = `button__text`;
    span.textContent = data.text;

    button.appendChild(span);
    buttonsContainer.appendChild(button);
}

// Переключение активности кнопок
buttonsContainer.addEventListener('click', event => {
    if (event.target.classList.contains('button')) {
        const buttonClass = event.target.classList;

        if (!buttonClass.contains('active')) {
            buttonClass.add('active');
        } else {
            buttonClass.remove('active');
        }
    } else {
        document.querySelectorAll('.button').forEach(button => {
            button.classList.remove('active');
        });
    }
});