import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingDots } from "../../components";
import { getPosts, getPostsByCategory } from "../../actions/posts";
import { useLocation } from 'react-router-dom';


const Paginate = ({ page }) => {

    const { numberOfPages } = useSelector((state) => state.posts);
    const { filters } = useSelector((state) => state.posts);
    const { isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    //console.log(filters);

    let location = useLocation();
    let route = location.pathname + location.search;

    useEffect(() => {

        if ((filters !== undefined) && (Object.keys(filters).length > 0)) {
            dispatch(getPostsByCategory(filters, page, route.split(/page=\d+/)[1]));
        } else {
            dispatch(getPosts(page));        
        }

    }, [page]);

    if (isLoading) {
        return (
            <LoadingDots />
        );
    }


    return (
        <Pagination
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={route.replace(/page=\d+/, `page=${item.page}`)} />
            )}
        />

    )

}

export default Paginate;