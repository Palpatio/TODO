import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export type RemoveTodolistAT = {
    type: 'REMOVE-TODOLIST'
    todolistId: string

}
export type AddTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
}

export type ChangeTodoListTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    todoListID: string

}
export type ChangeTodoListFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    value: FilterValuesType
    todoListID: string

}

export type ActionsType = RemoveTodolistAT | AddTodoListAT | ChangeTodoListTitleAT | ChangeTodoListFilterAT


export const todoListsReducer = (todoLists: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todoLists.filter(t => t.id != action.todolistId)
        case "ADD-TODOLIST":
            const newTodoList: TodolistType = {
                id: v1(),
                title: action.title,
                filter: 'all'
            }
            return [...todoLists, newTodoList]
        case "CHANGE-TODOLIST-TITLE":
                    return todoLists.map(tl=>tl.id===action.todoListID? {...tl, title: action.title}:tl)
        case 'CHANGE-TODOLIST-FILTER':
                    return todoLists.map(tl=>tl.id===action.todoListID? {...tl, title: action.value}:tl)
        default:
            return todoLists
    }
}