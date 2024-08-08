export const ADD = 'ADD';
export const SUB = 'SUB';
export const increase = () => {
    return {type: ADD}
};
export const decrease = () => {
    return {type: SUB}
};