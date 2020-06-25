import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";
import { Grid, TextField } from "@material-ui/core";

import DraggableUploader from "../../../../../../../components/imageUploader/DraggableUploader";
import InputField from "../../../../../../../components/custom-field/InputField";
import SelectField from "../../../../../../../components/custom-field/SelectField";

export default class AddBookForm extends Component {
    static propTypes = {
        prop: PropTypes,
    };
    constructor(props) {
        super(props);
        this.state = {};
        this.initialValues = {
            name: "",
            author: "",
            category: "",
            price: "",
            description: "",
            quantity: 1,
        };
        this.validationSchema = Yup.object().shape({
            name: Yup.string().required("Vui lòng không để trống."),
            author: Yup.string().required("Vui lòng không để trống."),
            category: Yup.string().required("Vui lòng không để trống"),
            price: Yup.number().required("Vui lòng không để trống"),
            quantity: Yup.number().required("Vui lòng không để trống"),
        });
    }

    render() {
        return (
            <Formik initialValues={this.initialValues}>
                {(formikProps) => {
                    const { values, errors, touched } = formikProps;
                    return (
                        <Form>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="name"
                                        component={InputField}
                                        label="Tên sách *"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FastField
                                        category="text_thin"
                                        name="author"
                                        component={InputField}
                                        label="Tác giả *"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            margin="dense"
                                            name="email"
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            margin="dense"
                                            name="phone"
                                            type="number"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Select State"
                                            margin="dense"
                                            name="state"
                                            required
                                            select
                                            // eslint-disable-next-line react/jsx-sort-props
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                        >
                                            {/* {this.states.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))} */}
                                        </TextField>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} style={{ marginTop: "8px" }}>
                                    {/* <Grid item md={12} xs={12}> */}
                                    <FastField
                                        category="multiple"
                                        name="description"
                                        component={InputField}
                                        label="Mô tả *"
                                        row={6}
                                    />
                                    {/* </Grid> */}
                                </Grid>
                                <Grid item md={12}>
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
                        </Form>
                    );
                }}
            </Formik>
        );
    }
}
