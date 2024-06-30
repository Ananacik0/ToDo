// // input title start
// const titleInput = document.querySelector('.title__input--line');
// const titleButton = document.querySelector('.title__input--button');
// // input title end

// const task = document.querySelector('.task');
// let taskTitle = document.querySelector('.task__title');

// let taskList = document.querySelector('.taskList');
// let newTask = document.createDocumentFragment(task);

// newTask.innerHTML = task;

// function pushTask () {

//         if (titleInput.value == '') {
//             alert('Вы не ввели задачу...');
//         }
//         else {
//             let titleInputValue = titleInput.value;
//             console.log(titleInputValue);
            
//             taskTitle.value = titleInputValue;
            
//             taskList.prepend(newTask.innerHTML);
//             console.log(`Новая задача: ${newTaskЫЫ}`);
            
//             titleInput.value = '';
//         };


// }



const inputTitle = document.querySelector('.title__input--line');
const btnTitle = document.querySelector('.title__input--button');

// const titleVlu = inputTitle.value;

const taskArr = [];

function pushTask () {
    if (inputTitle.value !== '') {
        // taskArr.push = `${inputTitle.value}`;
        taskArr[taskArr.length] = `${inputTitle.value}`;
        if (taskArr.length > 0) {
            for (task of [taskArr.length]) {
                inputTitle.value = '';
                if (task !== inputTitle.value) {
                    console.log(taskArr);
                }
                else {
                    console.log('Эта задача уже есть');
                };
                break;
            };
        }
        else {
            console.log('Ничего не добавлено');
        };
        // return inputTitle.value = '';
    }
    else {
        console.log('Задача не задана');
    };
};




btnTitle.addEventListener('click', pushTask);






