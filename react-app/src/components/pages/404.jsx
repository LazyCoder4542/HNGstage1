import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as ArrBackIcon} from "./../../assets/icons/arrow_back.svg";
import "./404.css"
function Page404() {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <main>
                <section id="error">
                    <header>
                        <small>404 error</small>
                        <h1>We can't find that page</h1>
                    </header>
                    <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                    <div className="buttons">
                        <button className="btn btn-primary">
                            <Link to='/'>
                                Take me home
                            </Link>
                        </button>
                        <button
                        to='/'
                        className="btn btn-secondary"
                        onClick={()=> {
                            console.log('hello');
                            navigate(-1)
                        }}
                        >
                            <span>
                                <ArrBackIcon />
                            </span>
                            Go back
                        </button>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Page404;