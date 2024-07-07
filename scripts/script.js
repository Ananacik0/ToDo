const KEYDEL = 'Delete';
const ENTER = 'Enter';
const ESC = 'Escape'

const titleInput = document.querySelector('.title__input--line');
const titleButton = document.querySelector('.title__input--button');
const titleNewTask = document.querySelector('.task__title');
const taskList = document.querySelector('.taskList');
const taskId = taskList.querySelector('.task');
const checkboxCheckAll = document.querySelector('.allCheck');
const removeAllCheckTask = document.querySelector('.removeFull');

let taskArray = [];

const deleteAllCheck = () => {
    taskArray = taskArray.filter(elem => !elem.isChecked);
    
    render();
};

const removeAllCheck = () => {
    if (taskArray.length <= 0) {
        checkboxCheckAll.checked = false;
        alert('Задача не задана')
    } else {
        taskArray.forEach( elem => {
            elem.isChecked = checkboxCheckAll.checked;
        });
        render();
    };
};

const pressRemoveAll = (e) => {
    if (e.code === KEYDEL) {
        deleteAllCheck();
    };
};

const enterPressPush = (e) => {
    if (e.code === ENTER) {
        pushTaskInArray();
    };
};

const pushTaskInArray = () => {
    if (titleInput.value !== '') {
        let taskObject = {
            id: Date.now(),
            text: titleInput.value,
            isChecked: false,
        };
        taskArray.push(taskObject);
        if (buttonPush !== false || keyEnterForPush !== false) {
            render();
        };
    };
};

const render = () => {
    checkboxCheckAll.checked = false;
    checkAllCheckbox();
    let newElement = '';
    taskArray.forEach( (taskObject) => {
        newElement += `
        <li class="task" id="${taskObject.id}">
            <input type="checkbox" class="task__checkout" ${taskObject.isChecked ? 'checked' : ''}>
            <input value="${taskObject.text}" class="inputInTask" hidden>
            <span class="task__title">${taskObject.text}</span>
            <button class="task__btn">&#10006;</button>
        </li>
        `;
    });
    taskList.innerHTML = newElement;
    titleInput.value = '';
};

// let checkAllCheckbox = () => {
//     if (taskArray.length > 0) {
//         let allChecked = taskArray.every(elem => elem.isChecked);
//         if (allChecked === true) {
//             removeAll.checked = true;
//             console.log(allChecked);
//         } else {
//             removeAll.checked = false;
//         };
//     } else {
//         console.log('dd');
//     };
// };

let checkAllCheckbox = () => {
    checkboxCheckAll.checked = taskArray.length > 0 ? taskArray.every(elem => elem.isChecked): false;
};


const convertCheckbox = (event) => {
    const eventId = event.target.parentElement.id;
    if (event.target.type === 'checkbox') {
        // event.target.isChecked = !event.target.isChecked;
        taskArray.forEach( (task) => {
            if (task.id === Number(eventId)) {
                task.isChecked = event.target.checked;
                render();
            } else {
                console.log('asqqwqwqw');
            };
        });
    };
    if (event.target.type === 'submit') {
        taskArray = taskArray.filter( elem => elem.id !== Number(eventId));
        render();
        // console.log(event);
    };
    // /////////////////////////////////////////////

    if (event.detail === 2) {
        console.log(event);
        event.target.hidden = true;
        event.target.previousElementSibling.hidden = false;
        event.target.previousElementSibling.focus();
    };
    event.target.previousElementSibling.addEventListener('blur', () => {
        render();
    });
    ///////////////////////////////////////////////////
};

const saveTitleTask = (e) => {
    // removeEventListener('keydown', enterPressPush);
    if (e.code === ENTER) {
        console.log(e);
        taskArray.forEach(task => {
            if (task.id === Number(e.target.parentElement.id)) {
                task.text = e.target.value;
            };
        });
        render();
    };
    if (e.code === ESC) {
        console.log('esc');
        render();
    };
};

// event.target.previousElementSibling.addEventListener('blur', () => {
//     render();
// });

// const searchTask = (event) => {
//     console.log(event.srcElement);
//     let taskInTaskList = taskList.querySelector('.task');
//     //вызов функции двойного слика
//     console.log(taskInTaskList);
// };


const keyEnterForPush = titleInput.addEventListener('keydown', enterPressPush);
const saveRenameTask = taskList.addEventListener('keydown', saveTitleTask);
const keyRemoveDel = document.addEventListener('keydown', pressRemoveAll);
const buttonPush = titleButton.addEventListener('click', pushTaskInArray);
const buttonCheckbox = taskList.addEventListener('click', convertCheckbox);
const buttonAllCheck = checkboxCheckAll.addEventListener('click', removeAllCheck);
const buttonAllRemove = removeAllCheckTask.addEventListener('click', deleteAllCheck);

