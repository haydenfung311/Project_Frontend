import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/joy/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(228, 0, 15, 0.7)',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: string,
    protein: string,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('LEGO®Creator - Sweetcorn Man', '開啟您的創意引擎，享受充滿成就感的項目，拚砌精緻的 BMW M 1000 RR 機車 1:5 比例複刻模型。', 185.00, 2, 370.00),
    createData('LEGO®Speed - The Elephant', '史上第一次，孩子與汽車迷可收藏樂高® 極速賽車 McLaren 雙車組合，內有經典的 F1 LM 與最新的 Solus GT。', 360.00, 1, 360.00),
    createData('LEGO®Creatorv - Kitchen Party', '•黃色巴士播放著cocomelon兒歌 ‘’Wheel On The Bus’’\n•內有座位可放置不同卡通人物\n•當播放兒歌時, 讓孩子一同唱歌並自由移動巴士!\n•美國平行進口\n•適合 24 個月及以上兒童', 160.00, 2, 320.00),
];

export default function CartTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600, maxWidth:'100%' }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Product</StyledTableCell>
                        <StyledTableCell>Description</StyledTableCell>
                        <StyledTableCell>Price</StyledTableCell>
                        <StyledTableCell>Quantity</StyledTableCell>
                        <StyledTableCell>Total Price</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                <img
                                    src="https://images.unsplash.com/photo-1563823263008-ec7877629ba0?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Product Image"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%'
                                    }} // Adjust dimensions and styles as needed
                                />
                            </StyledTableCell>
                            <StyledTableCell sx={{ whiteSpace: 'pre-line' }}>
                                <Typography variant="body1" fontWeight="bold">{row.name}</Typography>
                                {row.calories}
                            </StyledTableCell>
                            <StyledTableCell>{row.fat}</StyledTableCell>
                            <StyledTableCell>{row.carbs}</StyledTableCell>
                            <StyledTableCell>${row.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}