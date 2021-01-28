import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'title', headerName: 'Movie Options', width: 180 },
];

const rows = [
    { id: 1, title: 'Shrek1'},
    { id: 2, title: 'Shrek2' },
    { id: 3, title: 'Shrek3'},
    { id: 4, title: 'Starwars' },
    { id: 5, title: 'Avengers'},
    { id: 6, title: 'Dark Knight'},
    { id: 7, title: 'The Croods' },
    { id: 8, title: 'Little Prince'},
    { id: 9, title: 'Moana' },
];
export default function MovieDataTable(props) {
    return (
        <div style={{ height: 400, width: 400 }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection
                onRowSelected={select => {
                    console.log(select);
                    if (select.isSelected) {
                        props.setMovies(select.data.title);
                    }
                    else {
                        props.removeMovies(select.data.title);
                    }
                }}
            />
        </div>
    );
}