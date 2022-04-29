
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost, getPostsByCategory } from '../../actions/posts';
import Slider from '../../components/Slider/index';
import styled from 'styled-components';
import { LoadingDots } from '../../components';
import { useNavigate } from 'react-router-dom';



const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  /*
    useEffect(() =>{
      if(post) {
  
        dispatch(getPostsByCategory({brand:post.brand}))
      }
  
    }, [post])*/

  if (!post) return null;

  const openPost = (_id) => navigate(`/catalogo/${_id}`);

  if (isLoading) {
    return (
      <LoadingDots />
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  const array = post.othersImg;
  array.unshift(post.mainImg)

  return (
    <div >
      <Container>
        <Slider Imgs={array}></Slider>
      </Container>
      <div>
        <h1>{post.brand + ' ' + post.model}</h1>
        <h2>{post.year + ' | ' + post.km + ' Km'}</h2>
        <h2>{post.price + ' USD'}</h2>
      </div>

      <div>
        {!!recommendedPosts.length && (

          <div>
            <h1>Tambien te pueden interesar</h1>

            {recommendedPosts.map(({ brand, model, year, _id, mainImg }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <img src={mainImg} width='200px' alt='recomendados' />
                <h4>{brand}</h4> <h4>{model}</h4> <h4>{year}</h4>
              </div>

            ))}

          </div>

        )}




      </div>



    </div >




  );
};

const Container = styled.div`
  width: 95%;
  align-self: center;
  margin: auto;
  padding: 5%;
`

export default Post;