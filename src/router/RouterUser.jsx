import {userRouter, BrowserRouter} from "react-router-dom"

//Aqui van todos lo enlaces en la pagina principal

//-----------------------------------------
import Home from '../pages/Home'


const RouterUser = () => {
    const routes = userRouter ([
        {
            path:"/",
            element:<main />
        },

        {
            path:"/Pagina principal",
            element: <Home />
        },

        // {
        //     path:"/Vamos pa la calle",
        //     element:<Search />
        // },
    ])

    return RouterUser
};

// export default RouterUser

//En los parentesis se abren corchetes para traer los children; lo que esta en la instacia del componente
//Todo lo que no este no es un children
const RouterWrapper = ({children}) => {
    return (
        <BrowserRouter>
        {children}
        <RouterUser />

        </BrowserRouter>
    )
}

export default RouterWrapper