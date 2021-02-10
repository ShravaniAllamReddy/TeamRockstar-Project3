import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        type: 'dark'
    },

});

const columns = [
    { field: 'title', headerName: 'Movie Options', width: 180 },
];

export default function MovieDataTable(props) {
    return (
        <div style={{ height: 400, width: 370 }} >
            <DataGrid theme={theme} rows={props.movieList} columns={columns} pageSize={5} checkboxSelection
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