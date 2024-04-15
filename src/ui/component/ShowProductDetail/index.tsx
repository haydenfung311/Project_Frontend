import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {ButtonGroup, Button} from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ShowProductDetail() {
    // State to keep track of the quantity
    const [quantity, setQuantity] = React.useState(1);

    // Function to handle increasing the quantity
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // Function to handle decreasing the quantity
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <Paper
            sx={{
                p: 6,
                pt: { xs: 4, sm: 6 },
                margin: '120px auto 40px',
                maxWidth: '75%',
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={0}>
                <Grid item paddingRight={4}>
                    <ButtonBase sx={{ width: '100%', height: 428 }}>
                        <Img alt="complex" src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" paddingTop={2} paddingRight={4}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Cocomelon - CoComelon 音樂校巴 JJ 公仔 播放音樂 ''Wheels on The Bus''
                            </Typography>
                            <Typography variant="body2" gutterBottom marginTop='10px'>
                                •黃色巴士播放著cocomelon兒歌 ‘’Wheel On The Bus’’
                                •內有座位可放置不同卡通人物
                                •當播放兒歌時, 讓孩子一同唱歌並自由移動巴士!
                                •美國平行進口
                                •適合 24 個月及以上兒童
                            </Typography>
                            <Typography variant="body2" color="text.secondary" marginTop='14px'>
                                Product ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item container alignItems="center" paddingTop={2}>
                            <ButtonGroup variant="outlined" aria-label="Basic button group">
                                <Button onClick={increaseQuantity}>+</Button>
                                {/* Display the quantity */}
                                <Typography sx={{  display: 'flex', alignItems: 'center', px: 2  }}>{quantity}</Typography>
                                <Button onClick={decreaseQuantity}>-</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <IconButton color="primary" aria-label="add to shopping cart" sx={{ cursor: 'pointer', ml: '8px'}} variant="body2">
                                    <AddShoppingCartIcon/>
                                </IconButton>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div" paddingTop={2}>
                            HKD $185.00
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}