//Ce composant est utilisé pour afficher l'intégralité de la fonction tache
import { Header} from "./header/header";
import { TaskInput } from "./TaskInput/taskInput";
import { TaskList } from "./TaskList/taskList";
import  {Footer} from "./Footer/footer";
import { useState } from "react";
export const TaskContainer = ()=>{
    const[tasksList, setTasksList]=useState([
        
    ]);
    console.log("taskList:", tasksList);
      const addTask =(title)=>{
        const newTask ={
            id: tasksList.length? tasksList[tasksList.lenght - 1].id + 1:1, // permet de donner le nombre d'élément ajouté
            title: title,
            completed: false,

        };
        setTasksList([...tasksList, newTask]);// permet d'ajouter une nouvelle tâche la liste
    };
        const editTask= (id, completedValue)=>{
        setTasksList(
            tasksList.map((task)=>// .map permet d'afficher les éléments d'un tableau dynamiquement
                task.id === id?{...task, completed:completedValue} : task
                )
        );
    };
        const deleteTask=(id)=> {
            setTasksList(tasksList.filter((task)=> task.id!== id));
        }
    const getTaskCount=()=> {
            const completedTasks = tasksList.filter((task)=> task.completed ).length;
            const incompletedTasks = tasksList.length- completedTasks;
            return{
                completedTasks,
                incompletedTasks,
            };
            };
            const {completedTasks, incompletedTasks}= getTaskCount();
            console.log(completedTasks, incompletedTasks);
    
        return(
        <main>
            <Header/>
            <TaskInput addTask={addTask}/> {/*permet d'envoyer la methode à utiliser à ce composant enfant*/}
            <TaskList tasksList={tasksList} 
                      editTasK={editTask} 
                      deleteTask={deleteTask} 
                      incompletedTasks={incompletedTasks}/>
            <Footer completedTasks={completedTasks}/>
        </main>
    );
};

export default TaskContainer;