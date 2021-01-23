import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'movieOptions', headerName: 'Movie Options', width: 220 },
];

const rows = [
    { id: 1, movieOptions: 'Shrek1' },
    { id: 2, movieOptions: 'SHrek2' },
    { id: 3, movieOptions: 'Avengers' },
    { id: 4, movieOptions: 'The Croods' },
    { id: 5, movieOptions: '' },
    { id: 6, movieOptions: '' },
    { id: 7, movieOptions: '' },
    { id: 8, movieOptions: '' },
    { id: 9, movieOptions: '' },
];

export default function MovieDataTable() {
    return (
        <div style={{ height: 400, width: 400 }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}