import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <>
      <Link
        to={{ pathname: `/catalogo/${post._id}` }}
        style={{ textDecoration: "none" }}
      >
        <Card className={classes.card}>
          <ButtonBase component="span" className={classes.cardAction}>
            <CardMedia
              className={classes.media}
              image={
                post.mainImg ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              title={post.title}
            />
            <div className={classes.overlay}>
              <h2>
                {[0, "", null, undefined, "0"].includes(post.price)
                  ? "Precio a consultar"
                  : post.price + " USD"}
              </h2>
            </div>
            <br></br>
            <h2 className={classes.title} variant="h5" component="h2">
              {post.brand +
                " " +
                post.model +
                " " +
                post.version +
                " " +
                post.year}
            </h2>
            <div className={classes.details}>
              <h3 variant="body2" color="textSecondary" component="h2">
                {post.km + " Km"}
              </h3>
            </div>
            <CardContent>
              <p>{post.transmission + " / " + post.fuel}</p>
            </CardContent>
          </ButtonBase>
        </Card>
      </Link>
    </>
  );
};

export default Post;
