//ce composant sera utilisé pour afficher le champ de saisie
import { useState } from "react";
import styles from "./taskInput.module.css";
export const TaskInput=({addTask})=>{
    const [taskTitle, setTaskTitle]=useState("");
    

    const handleInputChange =(e)=>{
        setTaskTitle(e.target.value);
    }
    const handleAddTask=(e)=> {
        e.preventDefault();// Empêche le rechargement de la page/formulaire
        if(taskTitle.trim()) { // Méthode qui va nous permettre de supprimer les espaces 
        addTask(taskTitle);
        setTaskTitle("");
        }else{
            console.log("taskTitle is empty");
        }

    }

    return(
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}>📌Ajoutes ta prochaine tâche</h2>
            <form className={styles.container} onSubmit={handleAddTask}>
                <input type="text"
                        className={styles.input}
                        placeholder=" Indiquez un titre de tâche explicite..."
                        onChange={handleInputChange}
                        value={taskTitle}/>        {/*Utile pour réinitialser la zone de texte lorsque la valeur a été saisi par l'utilisateur */}
                <button className="button-primary " type="submit"> Ajouter </button>
            </form>
        </div>
    );
};