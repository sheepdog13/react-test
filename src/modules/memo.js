const initalState = {
    memoItems : [
        {
            id:1, name: "green", desc:"방명록을 작성했습니다"
        },
    ],
    date: new Date(),
    id:2
}
export const createMemo = (memo)=>({type:"createMemo", payload:memo})

function memo(state = initalState, action) {
    switch(action.type) {
        case "createMemo":
            const newMemo = {
                id: state.id,
                name: action.payload.name,
                desc: action.payload.desc
            }
            const newMemoList = state.memoItems.concat(newMemo)
            return {...state, memoItems: newMemoList, id: state.id+1}
        default :
            return state;
    }
}

export default memo;