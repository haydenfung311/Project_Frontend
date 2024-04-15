import {useLocation, useParams} from "react-router-dom";
import NavList from "../../component/NavList";
import ShowProductDetail from "../../component/ShowProductDetail";
import Footer from "../../component/Footer";

type params = {
    productId: string,
    userId: string
}


export default function ProductDetail() {
    const params = useParams<params>();
    const location = useLocation();

    return(
        <div className="product-listing-container">
            <NavList/>
            <ShowProductDetail/>
            <Footer/>
        </div>
    )


}

