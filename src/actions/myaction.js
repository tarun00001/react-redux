export const action = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res2 => {
            dispatch({type: 'CHANGE_NAME',payload: res2[0].name})
        })
    }
}
export const addWish = () => {
    return {
                type: 'ADD_WISH',
                payload: 'code'
            
}
}
// export const action = (name) => {
//     return {
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }