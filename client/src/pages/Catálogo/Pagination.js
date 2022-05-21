import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingDots } from "../../components";
import { useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const Paginate = ({ page }) => {

    const { numberOfPages } = useSelector((state) => state.posts);
    //const { filters } = useSelector((state) => state.posts);
    const { isLoading } = useSelector((state) => state.posts);
    //const dispatch = useDispatch();

    let location = useLocation();
    let route = location.pathname + location.search;

    /*
    useEffect(() => {

        if ((filters !== undefined) && (Object.keys(filters).length > 0)) {
            dispatch(getPostsByCategory(filters, page, route.split(/page=\d+/)[1]));
        } else {
            console.log('pag')
            dispatch(getPosts(page));        
        }

    }, [page]);
    */

    if (isLoading) {
        return (
            <LoadingDots />
        );
    }


    return (
        <StackContainer>
            <Stack spacing={2}>
                <Pagination
                    count={numberOfPages}
                    siblingCount={0}
                    page={Number(page) || 1}
                    shape='rounded'
                    size='large'
                    renderItem={(item) => (
                        <PaginationItem {...item} component={Link} to={route.replace(/page=\d+/, `page=${item.page}`)} />
                    )}
                />
            </Stack>
        </ StackContainer>
    )
}

const StackContainer = styled.div`
display: flex;
flex-direction: row;
margin-left: 5%;
`

export default Paginate;