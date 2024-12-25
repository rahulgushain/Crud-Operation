import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const DataContext = createContext();

export default function ContextFun({children}){
    const [data, setData] = useState([]);
    const [editId, setEditId] = useState();
    const [islogin,setIslogin] = useState(false)
    const [isUpdate,setIsUpdate] = useState(false)
    const [isDelete,setIsDelete] = useState(false)
    const[menuOpen,setMenuOpen] =useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
      } = useForm();

      const URL = "http://localhost:5000/data";
     
    
    
      async function FetchData() {
        try {
          const response = await fetch(URL);
          const output = await response.json();
          setData(output);
        } catch (error) {
          console.log("error Found");
        }
      }
    
      useEffect(() => {
        FetchData();
      }, [data]);
       
      const editHandler = (item) => {
        setEditId(item.id); // Set the ID of the item being edited
        setValue("firstName", item.firstName);
        setValue("lastName", item.lastName);
        setValue("Post",item.Post)
        setValue("Age", item.Age);
       
      };

      const onSubmit = async (e) => {
        toast.success("Details Added")
        try {
          const method = editId ? 'PUT':'POST'
          const endpoint = editId ? `${URL}/${editId}`: URL
          const response = await fetch(endpoint, {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(e),
          });
         
          setEditId(null);
          FetchData();
          reset()
        } catch (error) {
          console.error("Error", error);
        }
        
      };
    
      const deleteHandler = async (id) => {
        console.log(id)
        const response = await fetch(`${URL}/${id}`, {
          method: 'DELETE',
        });
      };
    const value={
        deleteHandler,onSubmit,editHandler,FetchData,register,
        handleSubmit,errors,data,islogin,setIslogin,
        isDelete,setIsDelete,
        isUpdate,setIsUpdate,
        setMenuOpen,menuOpen,
        reset
    }
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}