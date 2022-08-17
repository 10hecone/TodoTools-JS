import inquirer from 'inquirer';
import { execute } from './execute.js';

export const saveSetup = () => {
    inquirer
    .prompt(
        {
            type: 'list',
            name: 'execute',
            choices: ['new-todo', 'load-todo'],
            message: 'What command do you want to run ?',
            default: 'new-todo'
        }
    )
    .then(response => {
        switch(response.execute.toLowerCase()) {
            case 'new-todo': 
                execute.newFooTodo();
            break;
            case 'load-todo': 
                execute.loadFooTodo();
            break;
        };
    });
};

export const launchSetup = () => {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'execute',
                choices: ['add', 'remove', 'done', 'undone', 'list', 'clear', 'stop'],
                message: 'What command do you want to run ?',
                default: 'help'
            }
        )
        .then(response => {
            switch(response.execute.toLowerCase()) {
                case 'add': 
                    execute.add();
                break;
                case 'remove': 
                    execute.remove();
                break;
                case 'done': 
                    execute.check('done');
                break;
                case 'undone': 
                    execute.check('undone');  
                break;
                case 'list': 
                    execute.list();
                break;
                case 'clear': 
                    execute.clear();
                break;
                case 'stop': 
                    console.log('Fin du programme.')
                break;
            };
        });
};