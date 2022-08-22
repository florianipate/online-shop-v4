import { Outlet } from "react-router-dom"
const Header = () =>{
    return(
        <div>
            <div>
                <h1>I Am the Heade</h1>
            </div>
            <Outlet />
        </div>
    )
}