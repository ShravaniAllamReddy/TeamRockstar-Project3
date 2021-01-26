import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'movieOptions', headerName: 'Movie Options', width: 220 },
];

const rows = [
    { id: 1, movieOptions: 'Shrek1' },
    { id: 2, movieOptions: 'Shrek2' },
    { id: 3, movieOptions: 'Avengers' },
    { id: 4, movieOptions: 'The Croods' },
    { id: 5, movieOptions: 'Little prince' },
    { id: 6, movieOptions: 'Joker' },
    { id: 7, movieOptions: 'Dark Knight' },
    { id: 8, movieOptions: 'Moana' },
    { id: 9, movieOptions: 'Frozen' },
];

export default function MovieDataTable(props) {
    return (
        <div style={{ height: 400, width: 400 }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection
                onRowSelected={select => {
                    console.log(select);
                    if (select.isSelected) {
                        props.setMovies(select.data.movieOptions);
                    }
                    else {
                        props.removeMovies(select.data.movieOptions);
                    }
                }}
            />
        </div>
    );
}