import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
    Button,
    Modal,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Grid,
    TextField,
} from "@material-ui/core";

import DraggableUploader from "../../../../../../components/imageUploader/DraggableUploader";
import "./BooksToolbar.scss";
// import { SearchInput } from "components";

const useStyles = makeStyles((theme) => ({
    root: {},
    row: {
        height: "42px",
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(1),
    },
    spacer: {
        flexGrow: 1,
    },
    importButton: {
        marginRight: theme.spacing(1),
    },
    exportButton: {
        marginRight: theme.spacing(1),
    },
    searchInput: {
        marginRight: theme.spacing(1),
    },
}));

const ProductsToolbar = (props) => {
    const { className, ...rest } = props;
    const [openModal, setOpenModal] = React.useState(false);
    const classes = useStyles();

    const [values, setValues] = useState({
        firstName: "Shen",
        lastName: "Zhi",
        email: "shen.zhi@devias.io",
        phone: "",
        state: "Alabama",
        country: "USA",
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const states = [
        {
            value: "alabama",
            label: "Alabama",
        },
        {
            value: "new-york",
            label: "New York",
        },
        {
            value: "san-francisco",
            label: "San Francisco",
        },
    ];

    const bodyModal = (
        <div style={{}} className="body">
            <Card {...rest} className="">
                <form autoComplete="off" noValidate>
                    <CardHeader
                        subheader="Thông tin cần thiết để tạo một cuốn sách bán"
                        title="Đăng bán sách"
                    />
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    helperText="Please specify the first name"
                                    label="First name"
                                    margin="dense"
                                    name="firstName"
                                    onChange={handleChange}
                                    required
                                    value={values.firstName}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Last name"
                                    margin="dense"
                                    name="lastName"
                                    onChange={handleChange}
                                    required
                                    value={values.lastName}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    margin="dense"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                    value={values.email}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    margin="dense"
                                    name="phone"
                                    onChange={handleChange}
                                    type="number"
                                    value={values.phone}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Select State"
                                    margin="dense"
                                    name="state"
                                    onChange={handleChange}
                                    required
                                    select
                                    // eslint-disable-next-line react/jsx-sort-props
                                    SelectProps={{ native: true }}
                                    value={values.state}
                                    variant="outlined"
                                >
                                    {states.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Country"
                                    margin="dense"
                                    name="country"
                                    onChange={handleChange}
                                    required
                                    value={values.country}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <DraggableUploader title="Chọn ảnh bìa" />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <DraggableUploader title="Chọn ảnh chụp sách" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <Button color="primary" variant="contained">
                            Save details
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </div>
    );

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div {...rest} className={clsx(classes.root, className)}>
            <div className={classes.row}>
                <span className={classes.spacer} />
                <Button className={classes.importButton}>Import</Button>
                <Button className={classes.exportButton}>Export</Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleOpen}
                >
                    Add product
                </Button>
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className="Modal"
                >
                    {bodyModal}
                </Modal>
            </div>
            <div className={classes.row}>
                {/* <SearchInput
                    className={classes.searchInput}
                    placeholder="Search product"
                /> */}
            </div>
        </div>
    );
};

ProductsToolbar.propTypes = {
    className: PropTypes.string,
};

export default ProductsToolbar;
