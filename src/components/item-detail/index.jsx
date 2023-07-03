import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../item-count';

export default function ItemDetail({ img, title, price, description, category }) {

    return (
        <Card className="card" sx={{ maxWidth: 345}}>
            <div className="imgContainer">
                <CardMedia className="cardMedia"
                    sx={{ height: 200, width: 200 }}
                    image={img}
                />
            </div>
            <CardContent className="cardContent">
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="black">
                    Precio: {price}
                </Typography>
                <Typography variant="body2" color="black">
                    Descripción: {description}
                </Typography>
                <Typography variant="body2" color="black">
                    Categoría: {category}
                </Typography>
            </CardContent>
            <CardActions>
            <ItemCount initial={1} stock={10} />
            </CardActions>
        </Card>
    );
}