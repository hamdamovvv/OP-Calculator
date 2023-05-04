//переменная в которой хранится наши математические действия
let op
// Фнукция для результата
function calc() {
    //Переменная для результата
    let result
    //Получаем первое и второе число
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    //смотрим, что было в переменной
    //с действием, и действуем исходя из этого
    switch (op) {
        case '+' :
        result = num1 + num2
        break;
        case '-' :
        result = num1 - num2
        break; case '*' :
        result = num1 * num2
        break;
        case '/' :
            if (num2 === 0) {
                document.getElementById('result').textContent = "Ошибка"
                return
            }
        result = num1 / num2
        break
        default :
            document.getElementById('result')
                .textContent = 'Ошибка, выберите действие'
    }
    // отправляем результат на страницу
    document.getElementById('result').innerText = result
}

// FBGEAYFSILUK.DHLEVBOILA