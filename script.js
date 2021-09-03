const list = document.querySelectorAll('.list');
const listItem = document.querySelectorAll('.list-item');

let draggedItem = null;

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