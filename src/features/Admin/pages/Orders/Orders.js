import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";

import adminApi from "../../../../api/adminApi";

function Orders() {
    const [state, setState] = React.useState({
        columns: [
            { title: "Khách hàng", field: "customer" },
            {
                title: "Giỏ hàng",
                field: "surname",
                render: (rowData) => {
                    console.log(rowData.surname);
                    return rowData.surname.map((item) => <div>{item}</div>);
                },
            },
            { title: "Birth Year", field: "birthYear", type: "numeric" },
            {
                title: "Birth Place",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
        ],
        data: [
            {
                customer: "Mehmet",
                surname: ["Baran", "test"],
                birthYear: 1987,
                birthCity: 63,
            },
            {
                name: "Zerya Betül",
                surname: ["Baran", "test"],
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    });

    useEffect(() => {
        (async function () {
            let response = await adminApi.getOrders();
            if (response.success) {
                console.log(response);
            }
        })();
        return () => {
            // do something
        };
    }, []);

    return (
        <MaterialTable
            title="Editable Example"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
export default connect(null, null)(Orders);
