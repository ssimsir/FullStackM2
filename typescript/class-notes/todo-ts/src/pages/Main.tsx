import { Container } from "@mui/material"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";

interface ITodoType {
    task : string;
    isDone: boolean;
    id : string | number; //* id değeri string yada number olabilir
    todo?: string //? bu alan zorunlu değil optional. Eğer varsa type ı string
}

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Main = () => {
    // const [todos,setTodos] = useState([] as ITodoType[]) 
    // const [todos,setTodos] = useState<Array<ITodoType>>([]) 
    const [todos,setTodos] = useState<ITodoType[]>([]) //* yaygın olan kullanım
    console.log(todos)

    const getTodos = async ()=>{
        try {
            const {data} = await axios<ITodoType[]>(url)
            setTodos(data)
        } catch (error) {
            console.log(error)
        }
    }

    //* 1.yol
    // const addTodo = async (task:string) => {
    //     try {
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    //? 2.yol
    type AddFn = (task:string) => Promise<void>;

    const addTodo:AddFn = async (task) => {
        try {
            await axios.post(url,{task,isDone:false})
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getTodos()
    },[])

    return (
        <Container>
            <Header/>
            <AddTodoComp addTodo={addTodo}/>
        </Container>
    )
}
export default Main