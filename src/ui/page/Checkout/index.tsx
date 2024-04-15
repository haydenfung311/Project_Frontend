import NavList from "../../component/NavList";
import {useLocation, useParams} from "react-router-dom";

export default function Checkout() {
    const params = useParams();
    const location = useLocation();

    return(
        <div className="shopping-cart-container">
            <NavList/>
            <h1>Checkout Page!</h1>
            <h2>TransactionID is {params.transactionId}</h2>
            <h3>Pathname: {location.pathname} </h3>

        </div>
    )
}

// https://mui.com/joy-ui/react-card/#credit-card-form

// https://mui.com/material-ui/getting-started/templates/checkout/