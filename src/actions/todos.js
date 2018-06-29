import {
    CREATE_TASK
} from '../constants';

export const createTask = (todo) => ({
    type: CREATE_TASK,
    payload: todo
});