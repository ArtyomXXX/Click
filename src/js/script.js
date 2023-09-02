const parent = document.querySelector('.main');

parent.addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
        const buttonClass = e.target.classList;
        
        if (!buttonClass.contains('active')) {
            buttonClass.add('active');
        } else {
            buttonClass.remove('active');
        }
    } else {
        document.querySelectorAll('.button').forEach((e) => {
            e.classList.remove('active');
        });
    }
});