
// 1
// let students_name=['rashod','tatyana','said']
// let old_student='tatyana'
// let new_student='irina'

// let index=students_name.findIndex((item)=>item==old_student)
// console.log(index)

// if(index>=0){
//     students_name[index]=new_student
// }
// console.log(students_name)




// 2
// let warehouse=['apples','bananas','kivis','apelsins']
// let user_query=prompt('napishite tovar')
// let ind=warehouse.findIndex((item)=>item==user_query)
// if(ind>=0){
//     alert(`we are find ${user_query} in our warehouse`)
// }
// else{
//     warehouse.push(user_query)
//     alert(`we are added ${user_query} in our warehouse`)
// }

// console.log(warehouse)
// or
// for (let i=0; i<warehouse.length;i++){
//     console.log(`${i} ${warehouse[i].toUpperCase()}`)
// }
// or
// warehouse.forEach((e,i)=>{
//     console.log(`${i+1}. ${e}`)
// })



// function clean(){
//     document.getElementsByClassName('vvod')[0].innerHTML = ''
//     document.getElementsByClassName('vvod')[1].innerHTML = ''
// }





//maksimovich-------------------------------
// let a = 10
// let b = 5
// let c = (b == 0) ? "Error" : a/b

// (b == 0) ? c = "Error" : c = a / b

// let a = 5
// let b

// for (let i = 1; i < 10; i++) {
//     b = +prompt('Угадай от 0 до 10')
//     if(a == b) {
//         alert('Ты угадал!')
//         break;
//     }
// }


// let studentsName = ['Рашод', 'Татьяна', 'Саид']

// let newStudent = 'Татьяна' 

// let search = studentsName.find((item) => item == newStudent)

// if(search) {
//     alert('Такой пользователь уже существует')
// } else {
//     studentsName.push(newStudent) 
// }

// console.log(studentsName)
// console.log(search)


// let studentsName = ['Рашод', 'Татьяна', 'Саид']

// let oldStudent = 'Татьяна'
// let newStudent = 'Ирина'

// let index = studentsName.findIndex( (item) => item == oldStudent )
// console.log(index)
// if(index >= 0) {
//     studentsName[index] = newStudent
// }

// console.log(studentsName)



// let warehouse = ['яблоки', 'бананы', 'киви', 'апельсины']

// let userQuery = prompt("Напишите товар")
// userQuery = userQuery.toLowerCase()

// let ind = warehouse.findIndex((item) => item == userQuery)

// if(ind >= 0) {
//     alert(`Мы нашли ${userQuery} на нашем складе`)
// } else {
//     warehouse.push(userQuery)
//     alert(`Мы добавили ${userQuery} на наш склад`)
// }

// for(let i = 0; i < warehouse.length; i++) {
//     console.log(`${i+1}. ${warehouse[i]} `)
// }

// warehouse.forEach( (e, i) => {
//     console.log(`${i+1}. ${e}`)
// })

// for(let a = 0; a < warehouse.length; a++) {
//     let iterator = (a + 1) == warehouse.length ? '.' : ';'
//     console.log(warehouse[a] + '' + iterator)
// }
//------------------------------------------

function count(){
    let mas=document.getElementsByClassName('vvod')[0].value.replaceAll(' ', '')
    let num=document.getElementsByClassName('vvod')[1].value.replaceAll(' ', '')

    let i
    console.log(`Введены элементы массива: ${mas}`)
    console.log(`Введено число для выполнения пунктов 8 и 9: ${num}`)

    // контроль на число
    // let isNumber = !isNaN(Number(userInput))



    // контроль первого поля
    // for (i = 0; i < mas.length; i++) {
    //     if (mas[i]!=',' && mas[i]!='-' && mas[i]!='0' && mas[i]!='1'
    //      && mas[i]!='2' && mas[i]!='3' && mas[i]!='4' && mas[i]!='5'
    //      && mas[i]!='6' && mas[i]!='7' && mas[i]!='8' && mas[i]!='9'){
    //         let result=document.querySelector(".result")
    //         result.innerHTML='В первом поле валидны только цифры или запятые!'
    //         return
    //     }
    // }

    // создание массива
    let arr=mas.split(',')
    console.log('СОЗДАН НАЧАЛЬНЫЙ МАССИВ:')
    console.log(arr)
    document.querySelector(".massiv").innerHTML=`НАЧАЛЬНЫЙ МАССИВ: [${arr}]`

    let sum=0
    let mult=1
    let even=[] // возможна такая запись: new Array()
    let odd=[]
    let uniq = []
    let plus = []
    let minus = []
    let more = []
    let less = []
    let even_poz=[]
    let odd_poz=[]

    // контроль второго поля на тип не нужен, т.к. type="number"
    // TODO: спросить Максимовича
    // if (num===undefined || num===null) {
    //     let result=document.querySelector(".result")
    //     result.innerHTML='Введите число во второе поле!'
    //     return
    // }

    for (i = 0; i < arr.length; i++) {
        // контроль первого поля
        if (isNaN(Number(arr[i]))) {
            let result=document.querySelector(".result")
            result.innerHTML='В первом поле валидны только числа и запятые!'
            return
        }

        sum+=Number(arr[i])
        mult*=Number(arr[i])
        Number(arr[i])%2 == 0 ? even.push(Number(arr[i])) : odd.push(Number(arr[i]))

        // TODO: спросить Максимовича про тернарное условие !!!
        // !uniq.includes(Number(arr[i])) ? uniq.push(Number(arr[i]))

        // способ 1 ещё не проходили
        // if (!uniq.includes(Number(arr[i]))) {
        //     uniq.push(Number(arr[i]))
        // }

        // способ 2
        if ( uniq.find( (e) => e === Number(arr[i]) ) === Number(arr[i]) ) {
            console.log(`uniq - allready exists ${Number(arr[i])}`)
        }
        else {
            uniq.push(Number(arr[i]))
        }
        
        if (Number(arr[i])>0) {
            plus.push(Number(arr[i]))
        }

        if (Number(arr[i])<0) {
            minus.push(Number(arr[i]))
        }

        if (Number(arr[i])>num) {
            more.push(Number(arr[i]))
        }

        if (Number(arr[i])<num) {
            less.push(Number(arr[i]))
        }

        (i+1)%2 == 0 ? even_poz.push(Number(arr[i])) : odd_poz.push(Number(arr[i]))
    }

    console.log(`1. Сумма: ${sum}`)
    document.getElementsByClassName("res")[0].innerHTML+=sum

    // TODO: спросить Максимовича про округление !!!
    console.log(`2. Произведение: ${mult}`)
    document.getElementsByClassName("res")[1].innerHTML+=mult

    console.log('3. Массив чётных чисел:')
    console.log(even)
    document.getElementsByClassName("res")[2].innerHTML+=`[${even}]`

    console.log('4. Массив нечётных чисел:')
    console.log(odd)
    document.getElementsByClassName("res")[3].innerHTML+=`[${odd}]`

    console.log('5. Массив уникальных значений:')
    console.log(uniq)
    document.getElementsByClassName("res")[4].innerHTML+=`[${uniq}]`

    console.log('6. Массив положительных чисел:')
    console.log(plus)
    document.getElementsByClassName("res")[5].innerHTML+=`[${plus}]`

    console.log('7. Массив отрицательных чисел:')
    console.log(minus)
    document.getElementsByClassName("res")[6].innerHTML+=`[${minus}]`

    console.log(`8. Массив чисел, больших заданного значения ${num}: `)
    console.log(more)
    document.getElementsByClassName("res")[7].innerHTML+=`[${more}]`

    console.log(`9. Массив чисел, меньших заданного значения ${num}: `)
    console.log(less)
    document.getElementsByClassName("res")[8].innerHTML+=`[${less}]`

    console.log('10. Массив чисел, стоящих на чётных позициях')
    console.log(even_poz)
    document.getElementsByClassName("res")[9].innerHTML+=`[${even_poz}]`

    console.log('10a. Массив чисел, стоящих на нечётных позициях')
    console.log(odd_poz)
}