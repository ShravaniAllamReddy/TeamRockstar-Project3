import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Movie Options', width: 220 },
];


export default function MovieDataTable(props) {
    return (
        <div style={{ height: 400, width: 400 }}>
            <DataGrid rows={props.movieList} columns={columns} pageSize={5} checkboxSelection
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