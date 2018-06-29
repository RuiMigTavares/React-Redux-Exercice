import {
    CREATE_TASK
} from '../constants/todos';

const initialState = {
    title: "Isto é um teste",
    items: [{
            id: 1,
            content: 'Call mum'
        },
        {
            id: 2,
            content: 'Buy cat food'
        },
        {
            id: 3,
            content: 'Water the plants'
        },
    ],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            const nextId = state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
            const newItem = {
                id: nextId,
                content: action.payload,
            };
            return {...state, items: [...state.items, newItem] };
        default:
            return state;
    }
}
export default todosReducer;