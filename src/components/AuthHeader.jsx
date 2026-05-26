import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const AuthHeader = ({title, subtitle}) => {
    return(
        <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center justify-center mb-4">
            <img 
                src={logo}  
                alt="Library Logo"
                className="h-16 w-16 rounded-full object-cover"

            />
            </Link>
            <h1 className="text-4xl font-bold text-black mb-2">{title} </h1>
            <p className="text-gray-600">{subtitle} </p>
        </div>
    )
}

export default AuthHeader;