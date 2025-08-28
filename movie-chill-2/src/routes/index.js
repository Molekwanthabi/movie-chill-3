import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Loading from "../pages/Loading";
import SearchBar from "../pages/SearchBar";
import MovieDetails from "../pages/MovieDetails";
import MovieCard from "../pages/Moviecard";



const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Loading/>
            },
            {
               path: ":SearchBar",
               element : <SearchBar/>
            },
             {
                path: ":MovieDetails",
                element : <MovieDetails/>
             },
             {
                path: ":MovieCard",
                element : <MovieCard/>
             },
            
        ]

    }
])

export default router;