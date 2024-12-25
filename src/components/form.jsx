import { useContext } from "react";
import { DataContext } from "./context";
import Table from "./table";
import NavBar from "./NavBar";

export default function Form() {
  const { onSubmit, errors, register, handleSubmit } = useContext(DataContext);

  return (
    <div className="w-full h-[100vh] bg-blue-500">
      <div>
        <NavBar/>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-[90.5vh]"
      style={{
            backgroundImage : 'url(https://i0.wp.com/picjumbo.com/wp-content/uploads/green-natural-background-with-trees-and-wooden-foundation-free-image.jpeg?w=600&quality=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
        }}>
      <div className="w-[80%] md:w-[50%] rounded-xl p-2 text-center text-xl font-bold text-white capitalize">add details</div>

        <form 
            className="flex flex-col justify-center items-center min-h-[60%] w-[80%] md:w-[50%] bg-black bg-opacity-60 p-5 rounded-xl ">        
          <label htmlFor="fname" className="text-xl text-start w-full text-white font-bold">First Name</label>
          <input
            className={`w-full outline-none mt-2 rounded-xl p-2 ${errors.firstName ? "border-2 border-red-500" : ""}`}
            id="fname"
            {...register("firstName", {
              required: true,
              minLength: { value: 2, message: "Min length at least 3" },
              maxLength: { value: 10, message: "Max length at most 6" },
            })}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
          <label htmlFor="lname" className="text-xl mt-2 text-start w-full text-white font-bold">Last Name</label>
          <input id="lname" {...register("lastName",{
              required: true,
              minLength: { value: 2, message: "Min length at least 3" },
              maxLength: { value: 10, message: "Max length at most 6" },
            })} className={`w-full outline-none mt-2 rounded-xl p-2 ${errors.lastName ? "border-2 border-red-500" : ""}`} />
             {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}

          <label htmlFor="post" className="text-xl mt-2 text-start w-full text-white font-bold">Post</label>
          <input id="post" {...register("Post",{
              required: true,
              minLength: { value: 2, message: "Min length at least 3" },
              maxLength: { value: 10, message: "Max length at most 6" },
            })} className={`w-full outline-none mt-2 rounded-xl p-2 ${errors.Post ? "border-2 border-red-500" : ""}`}  />
             {errors.Post && (
            <p className="text-red-500">{errors.Post.message}</p>
          )}

          <label htmlFor="Age" className="text-xl mt-2 text-start w-full text-white font-bold">Age</label>
          <input type="number" id="Age" {...register("Age",{
              required: true,
              minLength: { value: 0, message: "Min length at least 3" },
              maxLength: { value: 6, message: "Max length at most 6" },
            })} className={`w-full outline-none mt-2 rounded-xl p-2 ${errors.Age ? "border-2 border-red-500" : ""}`}  />
             {errors.Age && (
            <p className="text-red-500">{errors.Age.message}</p>
          )}

         
        </form>
        <button className="p-2 w-[80%] md:w-[50%] rounded-xl mt-2  bg-red-500 text-white text-xl"
        onClick={handleSubmit(onSubmit)
        }>
            Save
          </button>
      </div>
     
      
    </div>
    
  );
}
