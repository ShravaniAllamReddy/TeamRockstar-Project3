import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    {
        field: 'name',
        headerName: 'Restaurant Options',
        width: 180
    },
];

export default function FoodDataTable(props) {
    return (
        <div style={{ height: 400, width: 370 , fontWeight: 900 }}>
            <DataGrid rows={props.restaurantList} columns={columns} pageSize={5} checkboxSelection
                onRowSelected={select => {
                    console.log(select);
                    if (select.isSelected) {
                        props.setFoods(select.data.name);
                    }
                    else {
                        props.removeFoods(select.data.name);
                    }
                }}
            />
        </div>
    );
}