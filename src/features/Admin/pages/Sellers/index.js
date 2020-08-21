import React, { useEffect } from "react";
import MaterialTable from "material-table";

import userApi from "../../../../api/userApi";

export default function Sellers() {
    const [state, setState] = React.useState({
        columns: [
            { title: "Tên", field: "name" },
            { title: "Email", field: "surname" },
            { title: "Sđt", field: "surname" },
            { title: "Địa chỉ", field: "birthYear" },
            {
                title: "Avatar",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
        ],
        data: [
            {
                name: "Mehmet",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63,
            },
            {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    });

    useEffect(() => {
        // execute after first render
        (async () => {
            try {
                let params = {
                    // page: 1,
                    // perPage: 2,
                    role: 1,
                };
                const response = await userApi.get(params);
                // let action = await getBooksSeller(response);
                // let resDispatch = dispatch(action);
                console.log(response);
            } catch (error) {
                console.log(`failed post register as ${error}`);
            }
        })();
        return () => {
            // execute when unmount
        };
    }, []);

    return (
        <MaterialTable
            title="Quản lý tài khoản người mua"
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
