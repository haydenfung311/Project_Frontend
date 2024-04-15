import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import {grey} from "@mui/material/colors";

export default function LoadingContainer() {
    return (
        <Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Stack spacing={4}>
                    <Skeleton variant="rectangular" width='100%' height={600} backgroundColor={grey[500]} />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Stack spacing={4}>
                    <Skeleton variant="rectangular" width='100%' height={600} backgroundColor={grey[700]} />
                </Stack>
            </Grid>
        </Grid>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
            <Stack spacing={4}>
                <Skeleton variant="rectangular" width='100%' height={600} backgroundColor={grey[500]} />
            </Stack>
        </Grid>
        <Grid item xs={12} sm={12}>
            <Stack spacing={4}>
                <Skeleton variant="rectangular" width='100%' height={600} backgroundColor={grey[700]} />
            </Stack>
        </Grid>
    </Grid>
        </Grid>
    );
}