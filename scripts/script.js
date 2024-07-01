// // // input title start
// // const titleInput = document.querySelector('.title__input--line');
// // const titleButton = document.querySelector('.title__input--button');
// // // input title end

// // const task = document.querySelector('.task');
// // let taskTitle = document.querySelector('.task__title');

// // let taskList = document.querySelector('.taskList');
// // let newTask = document.createDocumentFragment(task);

// // newTask.innerHTML = task;

// // function pushTask () {

// //         if (titleInput.value == '') {
// //             alert('Вы не ввели задачу...');
// //         }
// //         else {
// //             let titleInputValue = titleInput.value;
// //             console.log(titleInputValue);
            
// //             taskTitle.value = titleInputValue;
            
// //             taskList.prepend(newTask.innerHTML);
// //             console.log(`Новая задача: ${newTaskЫЫ}`);
            
// //             titleInput.value = '';
// //         };


// // }



// const inputTitle = document.querySelector('.title__input--line');
// const btnTitle = document.querySelector('.title__input--button');

// // const titleVlu = inputTitle.value;

// const taskArr = [];

// // function pushTask () {
// //     if (inputTitle.value !== '') {
// //         // taskArr.push = `${inputTitle.value}`;
// //         taskArr[taskArr.length] = `${inputTitle.value}`;
// //         if (taskArr.length > 0) {
// //             for (task of [taskArr.length]) {
// //                 inputTitle.value = '';
// //                 if (task !== inputTitle.value) {
// //                     console.log(taskArr);
// //                 }
// //                 else {
// //                     console.log('Эта задача уже есть');
// //                 };
// //                 break;
// //             };
// //         }
// //         else {
// //             console.log('Ничего не добавлено');
// //         };
// //         // return inputTitle.value = '';
// //     }
// //     else {
// //         console.log('Задача не задана');
// //     };
// // };



// const listTask = document.querySelector('.taskList');
// const taskBlock = document.querySelector('.task');
// let taskOutput = document.querySelector('.task__title');

// let task = taskArr[taskArr.length];


// // function searchTask (taskArr, task) {
// //     for (let i = 0; i < taskArr.length; i++) {
// //         if (taskArr[i] === task) {
// //             return Boolean(false);
// //         } else {
// //             console.log(task);
// //         }
// //     };
// // };
// // taskArr[taskArr.length] = `${inputTitle.value}`;

// function pushTask () {
//     for (let i = 0; i < taskArr.length; i++) {
//         if (taskArr[i] === task) {
//             console.log('array have element');
//         } else {
//             inputTitle.value = '';
//             console.log(taskArr);
//         }
//         break;
//     };
    
// };




// // function pushTask () {
// //     taskOutput.value = inputTitle.value;
// //     console.log(taskOutput.value);
// // };


// const pressEnter = document.addEventListener('keydown', function (e) {
//     if (e.code === 'Enter') {
//         pushTask();
//     };
// });

// const btnPush = btnTitle.addEventListener('click', pushTask);

///////////////////////////////////////////////////////////////////


// const inputTitle = document.querySelector('.title__input--line');
// const inputButton = document.querySelector('.title__input--button');
// const keyX = 'Keyx';
// const keyEnter = 'Enter';
// const keyDel = 'Delete';
// const keyNumDel = 'NumpadDecimal';
// let taskList = document.querySelector('.taskList');
// let taskLine = document.querySelector('.task');
// let taskTitle = document.querySelector('.task__title');

// let taskArr = [];

// const pushTaskInListPress = (e) => {
//     if (e.code === keyEnter) {
//         pushTaskInList();
//     };
// };

// else if (e.code === keyX) {
//     console.log(e);
// } else if (e.code === keyDel || e.code === keyNumDel) {
//     console.log(e);
// };

// const pushTaskInList = () => {
//     if (inputTitle.value !== '') {
//         let textTask = inputTitle.value;
//         inputTitle.value = '';
//         console.log(textTask);
//     } else {
//         alert('Задача не задана');
//     };
// };

// const buttonPush = inputButton.addEventListener('click', pushTaskInList);

// let pushTaskPress = document.addEventListener('keydown', pushTaskInListPress);


// //////////////////////////////////////////////////////////



const titleInput = document.querySelector('.title__input--line');
const titleButton = document.querySelector('.title__input--button');

let taskArray = [];

const pushTaskInArray = () => {
    if (titleInput.value !== '') {
        let taskObject = {
            id: Date.now(),
            text: titleInput.value,
            isChecked: false,
        };
        taskArray.push(taskObject);
        console.log(taskArray);
        titleInput.value = '';
    } else {
        alert('Задача не задана');  
    };
};

const buttonPush = titleButton.addEventListener('click', pushTaskInArray);






