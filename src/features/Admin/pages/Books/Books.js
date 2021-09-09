import React, { useEffect } from 'react';
import MaterialTable from 'material-table';

import { booksApi } from '../../../../api';

export default function Books() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Tên', field: 'name' },
      { title: 'Mô tả ', field: 'description' },
      { title: 'Tác giả', field: 'author' },
      { title: 'Giá', field: 'Price' },
    ],
    data: [],
  });

  useEffect(() => {
    (async () => {
      try {
        let params = {
          // page: 1,
          // perPage: 2,
        };
        const response = await booksApi.getAll(params);
        console.log(response.length);
        // let action = await getBooksSeller(response);
        // let resDispatch = dispatch(action);
        var books = [];
        for (let i = 0; i < response.length; i++) {
          console.log(response[i]);
          const result = {
            name: response[i].title,
            description: response[i].description,
            author: response[i].author,
            Price: response[i].price + '.000đ',
          };
          console.log(result);
          books.push(result);
        }
        setState({
          columns: [
            { title: 'Tên', field: 'name' },
            { title: 'Mô tả ', field: 'description' },
            { title: 'Tác giả', field: 'author' },
            { title: 'Giá', field: 'Price' },
          ],
          data: books,
        });
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
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
          paddingLeft: '50px',
        },
        rowStyle: {
          backgroundColor: '#EEE',
          marginLeft: '50px',
        },
      }}
      title="Quản lý sách"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                let name = oldData.name;
                let params = {
                  name,
                };
                const response = booksApi.delete(params);
                console.log(response);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
