import fs from 'fs';
const fileJson = './save/todo.json';
export let data = JSON.parse(fs.readFileSync(fileJson));

export function newTodo() {
    data = [];
    data.push(
        {
            name: 'todo' + (data.length + 1),
            save: []      
        }
    );
    fs.writeFileSync(fileJson, JSON.stringify(data, null, 4));    
};

export function addElement(content) {
    data[0].save.push({
        content: content,
        resolve: false
    });
    fs.writeFileSync(fileJson, JSON.stringify(data, null, 4));    
}

export function removeElement(length, param) {
    switch(param) {
        case 'all': 
            data[0].save = [];
            fs.writeFileSync(fileJson, JSON.stringify(data, null, 4));   
        break;
        default:
            if(length === 1) {
                data[0].save.splice((length - 1), length);
            } else {
            data[0].save.splice(length - 1, length - 1);
            };
            fs.writeFileSync(fileJson, JSON.stringify(data, null, 4));    
        break;
    };
};

export function checkElement(param, length) {
    switch(param) {
        case 'done':
            data[0].save[length].resolve = true;
            fs.writeFileSync(fileJson, JSON.stringify(data, null, 4));    
        break;
        case 'undone':
            data[0].save[length].resolve = false;
            fs.writeFileSync(fileJson, JSON.stringify(data, null, 4));    
        break;
    };
};