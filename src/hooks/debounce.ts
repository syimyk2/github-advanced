import {useEffect, useState} from "react";

export const useDebounce =(value: string, deleay=300): string =>{
    const [debounce, setDebounce] = useState(value)

 useEffect(()=>{
     const handler = setTimeout(()=>setDebounce(value), deleay)
     return ()=>clearTimeout(handler)

 }, [value, deleay])

    return debounce
}