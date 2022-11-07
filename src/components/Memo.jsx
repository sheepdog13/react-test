import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMemo } from "../modules/memo";


const Memo = () => {
    const memolist = useSelector((state)=>(state.memo.memoItems))
    const [name,setName] = useState("")
    const [desc,setDesc] = useState("")

    const date = useSelector((state)=>(state.memo.date))

    const dispatch = useDispatch();
    const addMemo = ()=>{dispatch(createMemo({name:name, desc:desc}))}
    return (  
        <div>
            <h1>방명록을 작성해주세요</h1>
            <hr />
                <strong>이름</strong>
                <input type="text" onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                <input type="text" onChange={(e)=>{
                        setDesc(e.target.value)
                    }}/>
                <button onClick={addMemo}>작성</button>
            <hr />
            <ul>
                {
                    memolist.map((el)=>(
                        <li>{el.name}:{el.desc}{date.getMonth()+1}/{date.getDate()}</li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default Memo;