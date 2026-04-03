let input = document.querySelector('.input');
let numbers = document.querySelectorAll('.value');
let AC = document.querySelector('.AC');
let DEL = document.querySelector('.DEL');
let equal = document.querySelector('.equal');



numbers.forEach(item => {
    item.addEventListener('click', () => {
        input.value += item.value;
    })
});

AC.addEventListener('click', () => {
    if (input.value === "") {
        Swal.fire({
            title: 'خطا',
            text: 'چیزی موجود نیست!',
            icon: 'error'
        });
    }
    input.value = "";
})

DEL.addEventListener('click', () => {
    if (input.value === "") {
        Swal.fire({
            title: 'خطا',
            text: 'چیزی موجود نیست!',
            icon: 'error'
        });
    }
    input.value = input.value.slice(0, -1);
})

equal.addEventListener('click', () => {
    if (input.value === "") {
        Swal.fire({
            title: 'خطا',
            text: 'چیزی موجود نیست!',
            icon: 'error'
        });
    } else {
        try {
            input.value = eval(input.value);
        } catch (e) {
            Swal.fire({
                title: 'خطا',
                text: e.message,
                icon: 'error'
            });
        }
    }
})
