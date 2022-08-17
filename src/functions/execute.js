import inquirer from 'inquirer';
import { addElement, newTodo, removeElement, data, checkElement } from '../functions/save.js';
import { launchSetup, saveSetup } from './setup.js';

export const execute = {

    newFooTodo() {
        newTodo();
        return launchSetup();
    },

    loadFooTodo() {
        if(data.length === 0) {
            console.log('No backups found 😢')
            return saveSetup();
        }
        return launchSetup();
    },

    add() {
        inquirer
        .prompt(
            {
                type: 'input',
                name: 'execute',
                message: 'What element do you want to add ?',
            }
        )
        .then(response => {
            if(response.execute.length <= 0) {
                console.log('No item specified 😰')
                return launchSetup();
            };
            addElement(response.execute);
            return launchSetup();
        });  
    },

    remove() {
        for(const view of data[0].save) {
            console.log(((data[0].save.findIndex(v => v.content === view.content)) + 1) + ' - ' + view.content)
        };
        inquirer
        .prompt(
            {
                type: 'number',
                name: 'execute',
                message: 'What element do you want to remove ?',
            }
        )
        .then(response => {
            removeElement(response.execute)
            return launchSetup();
        });  
    },

    list() {
        for(const view of data[0].save) {
            console.log(((data[0].save.findIndex(v => v.content === view.content)) + 1) + ' - ' + view.content + (view.resolve ? ' [Resolve]' : ' [Not Resolve]'))
        };
        return launchSetup();
    },

    clear() {
        removeElement('', 'all')
        return launchSetup();
    },

    check(params) {
        for(const view of data[0].save) {
            console.log(((data[0].save.findIndex(v => v.content === view.content)) + 1) + ' - ' + view.content)
        };
        inquirer
        .prompt(
            {
                type: 'input',
                name: 'execute',
                message: 'What element do you want to done ?',
            }
        )
        .then(response => {
            switch(params) {
                case 'done': 
                    checkElement('done', response.execute - 1)
                    launchSetup();
                break;
                case 'undone':
                    checkElement('undone', response.execute - 1)
                    launchSetup();
                break
            }
        });  
    },
}