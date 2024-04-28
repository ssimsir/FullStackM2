import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../data";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function CardComp() {
  return (
    <Container align="center">
      <Typography variant="h3" color="morcivert.dark" m={3}>
        Card and Grid
      </Typography>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={item.img}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small">
                  Share
                </Button>
                <Button variant="contained" color="secondary" size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
