import React, {useEffect} from "react";
import { Pagination,PaginationItem } from "@mui/material";
//import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getPosts , getPostsByCategory} from "../../actions/posts";


const Paginate = ( {page} ) => {

    
    const {numberOfPages} = useSelector( (state) => state.posts);
    const filter = useSelector( (state) => state.posts.filter);
    //console.log(filter)
    const dispatch = useDispatch();
  

    useEffect(() => {       

        if(page){
            dispatch(getPosts(page));
        }

    },[dispatch, page]);


      

    return (
        <Pagination
            //classes = {{ul: classes.ul}}
            count = {numberOfPages}
            page= {Number(page) || 1}
            variant = "outlined"
            color = "primary"
            renderItem = {(item) => (
                <PaginationItem {...item} component = {Link} to={`/catalogo?page=${item.page}`}/>
            ) }
        />
        
    )

}

export default Paginate;