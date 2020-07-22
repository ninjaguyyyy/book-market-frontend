import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Modal,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import "./BooksToolbar.scss";
import AddBookForm from "./components/AddBookForm";

// import { SearchInput } from "components";

const useStyles = (theme) => ({
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
});

class ProductsToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            formValues: {},
            options: {},
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    generateBodyModal() {
        const bodyModal = (
            <div style={{}} className="body">
                <Card className="">
                    <CardHeader
                        subheader="Thông tin cần thiết để tạo một cuốn sách bán"
                        title="Đăng bán sách"
                    />
                    <Divider />
                    <CardContent>
                        <AddBookForm />
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
                </Card>
            </div>
        );
        return bodyModal;
    }

    handleOpen() {
        this.setState({
            openModal: true,
        });
    }

    handleClose() {
        this.setState({
            openModal: false,
        });
    }

    render() {
        const { classes, className, ...rest } = this.props;
        const { openModal } = this.state;
        return (
            <div {...rest} className={clsx(classes.root, className)}>
                <div className={classes.row}>
                    <span className={classes.spacer} />

                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.handleOpen}
                    >
                        Đăng bán sách
                    </Button>
                    <Modal
                        open={openModal}
                        onClose={this.handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className="Modal"
                    >
                        {this.generateBodyModal()}
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
    }
}

ProductsToolbar.propTypes = {
    className: PropTypes.string,
};

export default withStyles(useStyles)(ProductsToolbar);
