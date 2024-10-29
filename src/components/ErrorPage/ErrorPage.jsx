import { useRouteError, Link } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h2>Oopps!!</h2>
            <p>Page not found</p>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
           
            <Link to='/'><button>Home</button></Link>
        </div>
    );
};

export default ErrorPage;