import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
//*1.yol
// const AddTodoComp = ({addTodo}:{addTodo:(task:string)=>Promise<void>}) => {
//   // const [task,setTask] = useState<string>("")//! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.
//   const [task, setTask] = useState(""); //* Type Inference

//   const handleClick = () => {
//     console.log(task);
//     addTodo(task)
//     setTask("");
//   };
//   return (
//     <Box
//       sx={{
//         display: { xs: "block", sm: "flex" },
//         justifyContent: { xs: "flex-start", sm: "center" },
//         m: { xs: 1, sm: "auto" },
//         height: { xs: "120px", sm: "80px" },
//       }}
//     >
//       <TextField
//         id="outlined-basic"
//         label="New Todo"
//         color="success"
//         sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
//         variant="outlined"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         inputProps={{ maxLength: 40 }}
//       />
//       <Button
//         variant="contained"
//         color="success"
//         sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
//         endIcon={<SaveIcon />}
//         onClick={handleClick}
//         disabled={!task.trim()}
//       >
//         Save Todo
//       </Button>
//     </Box>
//   );
// };
// export default AddTodoComp;

interface IAddTodoComp {
    addTodo:(task:string)=>Promise<void>;
}

//? 2.yol
const AddTodoComp = ({addTodo}:IAddTodoComp) => {
    // const [task,setTask] = useState<string>("")//! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.
    const [task, setTask] = useState(""); //* Type Inference
  
    const handleClick = () => {
      console.log(task);
      addTodo(task)
      setTask("");
    };
    return (
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: { xs: "flex-start", sm: "center" },
          m: { xs: 1, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="New Todo"
          color="success"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          inputProps={{ maxLength: 40 }}
        />
        <Button
          variant="contained"
          color="success"
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          endIcon={<SaveIcon />}
          onClick={handleClick}
          disabled={!task.trim()}
        >
          Save Todo
        </Button>
      </Box>
    );
  };
  export default AddTodoComp;