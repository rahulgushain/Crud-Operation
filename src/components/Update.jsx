import { useContext } from "react";
import Table from "./table";
import { DataContext } from "./context";

export default function Update(){
const {data} = useContext(DataContext)

    return(
        <div>
            <Table/>
            <div>
                <table>
                    <tr>Action</tr>
                    <tr>{
                        data.map((item)=>
                            <button >Update</button>
                        )
                    }
                       
                    </tr>
                </table>
            </div>
        </div>
    )
}