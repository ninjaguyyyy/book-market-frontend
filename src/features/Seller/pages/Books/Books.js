import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getBooksSeller } from "../../../../actions/user";
import booksApi from "../../../../api/booksApi";
import BookCard from "../../../../components/BookCard/BookCard";
import BooksToolbar from "./components/BooksToolbar/BooksToolbar";
import { getUserId } from "../../../../utils/auth";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    content: {
        marginTop: theme.spacing(2),
    },
    pagination: {
        marginTop: theme.spacing(3),
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
}));

const ProductList = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        // execute after first render
        (async () => {
            try {
                let params = {
                    page: 1,
                    perPage: 2,
                    sellerId: getUserId(),
                };
                const response = await booksApi.get(params);
                console.log(response);
                let action = await getBooksSeller(response);
                dispatch(action);
            } catch (error) {
                console.log(`failed get books as ${error}`);
            }
        })();
        return () => {
            // execute when unmount
            console.log("unmount");
        };
    }, []);

    const onChangePagination = (e, page) => {
        (async () => {
            try {
                let params = {
                    page: page,
                    perPage: 2,
                    sellerId: getUserId(),
                };
                const response = await booksApi.get(params);
                let action = await getBooksSeller(response);
                dispatch(action);
            } catch (error) {
                console.log(`failed get books as ${error}`);
            }
        })();
    };

    const renderBooks = (booksSeller) => {
        let renderResult;
        if (booksSeller.total) {
            renderResult = booksSeller.docs.map((book) => (
                <Grid item key={book._id} lg={4} md={3} xs={12}>
                    <BookCard book={book} />
                </Grid>
            ));
        } else {
            renderResult = (
                <h3 className="notification">
                    Chưa có sản phẩm trong giỏ hàng.
                </h3>
            );
        }
        return renderResult;
    };

    return (
        <div className={classes.root}>
            <BooksToolbar />
            <div className={classes.content}>
                <Grid container spacing={3}>
                    {renderBooks(props.booksSeller)}
                </Grid>
            </div>
            <div className={classes.pagination}>
                <Pagination
                    count={
                        props.booksSeller.pages ? props.booksSeller.pages : 1
                    }
                    color="secondary"
                    onChange={onChangePagination}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({ booksSeller: state.books.booksSeller });

export default connect(mapStateToProps, null)(ProductList);
