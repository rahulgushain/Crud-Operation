import { useEffect, useState } from "react"


export default function Result(){
const URL = 'http://localhost:5000/data'
const [data,setData] = useState([])

async function FetchData(){
    try{
        const response = await fetch(URL)
        const output = await response.json()
        setData(output)
    }
    catch(error){
        console.log("error Found")
    }
}
useEffect(()=>{
    FetchData()
},[data])

const deleteHandler= async(id)=>{  
    const response = await fetch(`${URL}/${id}`,
        {
            method:'DELETE'
        }
    )

}
const editHandler =(item)=>{
  setEditId(item.id); // Set the ID of the item being edited
  setValue("firstName", item.firstName);
  setValue("lastName", item.lastName);
  setValue("Age", item.Age);
  setValue("post", item.post);

}

    return(
        <div>
        <table className='bg-red-200  border-2 border-black w-full '> 
        <thead >
          <tr >
          <td className='p-4'>#</td>
            <td className='p-4' >id</td>
            <td className='p-4'>name</td>
            <td className='p-4'>last name</td>
            <td className='p-4'>post</td>
            <td className='p-4'>age</td>
            <td className='p-4'> Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
              return(
                <tr key={index}>
                  <td className='p-4'>{index+1}</td>
                  <td className='p-4'>{item.id}</td>
                  <td className='p-4'>{item.firstName}</td>
                  <td className='p-4'>{item.lastName}</td>
                  <td className='p-4'>{item.post}</td>
                  <td className='p-4'>{item.Age}</td>
                  <td className=' gap-5 '>
                    <button className='border-2 border-black mr-4 p-2' onClick={()=>editHandler(item)}
                    >Edit</button>
                    <button className='border-2 border-black mr-4 p-2' onClick={()=>deleteHandler(item.id)} >Delete</button>
                  </td>
                </tr>
              )

            })
          }
        </tbody>
      </table> 
        </div>
    )
}