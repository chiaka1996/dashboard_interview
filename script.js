const list = document.querySelectorAll('.list');
const listItem = document.querySelectorAll('.list-item');
const hamburger = document.querySelector('.hamburger');
const bar_one = document.querySelector('#bar_one');
const bar_two = document.querySelector('#bar_two');
const bar_three = document.querySelector('#bar_three');
const sidebar1 = document.querySelector('.sidebar1');
const sidebar2 = document.querySelector('.sidebar2');

let draggedItem = null;
let showSideBar = true;

console.log(listItem);
console.log(list);

for(let i=0; i < listItem.length; i++){
    const item = listItem[i]

    item.addEventListener('dragstart', (e) => {
        console.log('dragstart', e);
        draggedItem = item;
        setTimeout(() => {
            item.style.display = 'none';
        }, 0)
    });

    item.addEventListener('dragend', (e) => {
        
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0)
    })

    for(let j=0; j < list.length; j++){
        const lists = list[j]

        lists.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        lists.addEventListener('dragenter', (e) => {
             e.preventDefault();
        })

        lists.addEventListener('drop', (e) => {
            lists.append(draggedItem);
        })
    }
}

hamburger.addEventListener('click', (e) => {

    if(showSideBar){
    bar_one.classList.add('bar_one');
    bar_two.classList.add('bar_two');
    bar_three.classList.add('bar_three');
    sidebar1.classList.add('addsidebar1');
    sidebar2.classList.add('addsidebar2');
    showSideBar = false;
    return;
    }

    if(!showSideBar){
        bar_one.classList.remove('bar_one');
        bar_two.classList.remove('bar_two');
        bar_three.classList.remove('bar_three');
        sidebar1.classList.remove('addsidebar1');
        sidebar2.classList.remove('addsidebar2');
        showSideBar = true;
        return;
    }
})