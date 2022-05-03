import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingDots } from "../../components";
import { getPosts } from "../../actions/posts";


const Paginate = ({ page }) => {


    const { numberOfPages } = useSelector((state) => state.posts);
    const { filters } = useSelector((state) => state.posts);
    const { isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();


    useEffect(() => {

        if (page && filters === undefined) {
            dispatch(getPosts(page));
        }

    }, [dispatch, page, filters]);

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
                <PaginationItem {...item} component={Link} to={`/catalogo?page=${item.page}`} />
            )}
        />

    )

}

export default Paginate;