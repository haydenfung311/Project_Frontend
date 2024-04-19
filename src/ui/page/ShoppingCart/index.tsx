import NavList from "../../component/NavList";
import {useEffect} from "react";
import * as CartItemApi from "../../../api/CartItemApi.ts"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import CartTable from "../../component/CartTable";
import OrderSummary from "../../component/OrderSummary";
import Footer from "../../component/Footer";
import {Link} from "react-router-dom";
import * as React from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
}));


export default function ShoppingCart() {
    const  putCartItem = async () =>{
        CartItemApi.putCartItem("1","1");
    }
    useEffect(() => {
        putCartItem();
    }, []);

    return(
        <>
        <NavList/>
            <Box sx={{
                flexGrow: 1,
                marginTop: '120px',
                marginLeft: '60px',
                marginRight: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0)', // Completely transparent
                }}>
                <Grid container spacing={ 2 } >
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={4} justifyContent="space-between">
                            <Grid>
                                <Item><CartTable/></Item>
                            </Grid>
                            <Grid>
                                <Item><OrderSummary/></Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>

        </>
    )
}
