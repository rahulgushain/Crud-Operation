import { useContext } from "react";
import { DataContext } from "./context";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Table() {
  const { data, deleteHandler, editHandler, isUpdate, isDelete } = useContext(DataContext);

  return (
    <div className="w-full h-full ">
      {/* Navbar */}
      <NavBar />

      {/* Table Container */}
      <div className=" overflow-hidden bg-slate-200">
        <table className="w-full table-auto border-collapse text-center text-sm sm:text-base md:text-lg lg:text-xl">
          {/* Table Header */}
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="p-4">#</th>
              <th className="p-4">ID</th>
              <th className="p-4">First Name</th>
              <th className="p-4">Last Name</th>
              <th className="p-4">Post</th>
              <th className="p-4">Age</th>
              {(isUpdate || isDelete) && <th className="p-4">Action</th>}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="even:bg-slate-300 odd:bg-slate-100 border-b border-gray-300">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.firstName}</td>
                <td className="p-4">{item.lastName}</td>
                <td className="p-4">{item.Post}</td>
                <td className="p-4 text-red-600">{item.Age}</td>
                {(isUpdate || isDelete) && (
                  <td className="p-4 flex justify-center gap-2">
                    {isUpdate && (
                      <Link to="/Crud">
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
                          onClick={() => editHandler(item)}
                        >
                          Update
                        </button>
                      </Link>
                    )}
                    {isDelete && (
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
                        onClick={() => deleteHandler(item.id)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
