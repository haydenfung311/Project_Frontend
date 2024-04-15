import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from "@mui/joy/Container";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import {GetAllProductDto} from "../../../data/product/GetAllProductDto.ts";
import * as ProductApi from "../../../api/ProductApi.ts";
import LoadingContainer from "../LoadingContainer";

type Props ={
    dto: GetAllProductDto
}
export default function MasonryImageList({dto}:Props) {
    const[getAllProductDtoList, setGetAllProductDtoList] = useState <GetAllProductDto []|undefined> (undefined);

    const fetchAllProducts = async ()=>{
        try {
            const responseDtoList = await ProductApi.getAllProducts();
            setGetAllProductDtoList(responseDtoList);
        }catch (error){

        }
    }
    useEffect (() => {
        fetchAllProducts();
    }, []);

    return (
        <Container
            id="productlist">
        <Box sx={{ width: '100%', overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={20}>
                {
                    getAllProductDtoList
                    ? getAllProductDtoList.map((dto) => (
                    <Link to="/product/:productId/:userId">
                    <ImageListItem key={dto.image_url}>
                            <img
                                srcSet={`${dto.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${dto.image_url}?w=248&fit=crop&auto=format`}
                                alt={dto.name}
                                loading="lazy"
                            />
                        <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                padding: '8px',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                            }}
                        >
                            {dto.name}
                        </Typography>
                        <Typography
                            variant="body3"
                            color="text.secondary"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                padding: '8px',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                            }}
                        >
                            HKD ${dto.price}
                        </Typography>
                    </ImageListItem>
                    </Link>
                    ))
                :<LoadingContainer/>
                }
            </ImageList>
        </Box>
        </Container>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1563823263008-ec7877629ba0?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Sweetcorn Man',
        price: '$ 230',
        id: '001',
    },
    {
        img: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Star War - Crossing',
        price: '$ 230',
        id: '002',
    },
    {
        img: 'https://images.unsplash.com/photo-1609741199466-a20dec135831?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Elephant',
        price: '$ 230',
        id: '003',
    },
    {
        img: 'https://images.unsplash.com/photo-1607297737950-b3c024a71a69?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Kitchen Party',
        price: '$ 230',
        id: '004',
    },
    {
        img: 'https://images.unsplash.com/photo-1613923377958-603839f4dbcf?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Spaceman in Color',
        price: '$ 230',
        id: '005',
    },
    {
        img: 'https://images.unsplash.com/photo-1610483178766-8092d96033f3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Spaceship Pilot',
        price: '$ 230',
        id: '006',
    },
    {
        img: 'https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Star War Theme',
        price: '$ 230',
        id: '007',
    },
    {
        img: 'https://images.unsplash.com/photo-1505322033502-1f4385692e6a?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Lego City',
        price: '$ 230',
        id: '008',
    },
    {
        img: 'https://images.unsplash.com/photo-1517232202491-70f954c23ed4?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Rescure Team',
        price: '$ 230',
        id: '009',
    },
    {
        img: 'https://images.unsplash.com/photo-1526505262320-81542978f63b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Birthday Party Set',
        price: '$ 230',
        id: '010',
    },
];