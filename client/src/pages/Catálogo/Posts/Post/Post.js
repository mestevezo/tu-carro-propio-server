import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const openPost = (e) => {
    navigate(`/catalogo/${post._id}`);
  }

  return (
    <Card className={classes.card}>
      <ButtonBase
        component="span"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.mainImg || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.price + ' USD'}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.km + ' Km'}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.brand + ' ' + post.model + ' ' + post.year}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.transmission + ' / ' + post.fuel}</Typography>
        </CardContent>
      </ButtonBase>

    </Card>
  );
};

export default Post;