import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import BookCard from "../../../../components/BookCard/BookCard";
import userApi from "../../../../api/userApi";
import "./index.scss";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        (async function () {
            let response = await userApi.getFavorites();
            setFavorites(response.favorites);
        })();
        return () => {
            // cleanup
        };
    }, []);

    const handleDeleteFromFavorites = (idBook) => {
        (async function () {
            let response = await userApi.deleteFromFavorite({ idBook });
            console.log(response);
            if (response.success) {
                setFavorites(response.favorites);
            }
        })();
    };

    const renderBooks = () => {
        if (favorites.length) {
            return favorites.map((book) => (
                <Grid item key={book._id} lg={3} md={3} xs={12}>
                    <BookCard
                        book={book.book}
                        handleDeleteFromFavorites={handleDeleteFromFavorites}
                    />
                </Grid>
            ));
        } else {
            return (
                <h3 className="notification">
                    Chưa có sản phẩm trong danh sách yêu thích.
                </h3>
            );
        }
    };

    return (
        <div className="Favorites">
            <div className="content">
                <Grid container spacing={3}>
                    {renderBooks()}
                </Grid>
            </div>
        </div>
    );
}
