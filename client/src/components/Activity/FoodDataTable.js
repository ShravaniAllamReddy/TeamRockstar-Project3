import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Restaurant Options', width: 220 },
];


export default function FoodDataTable(props) {
    return (
        <div style={{ height: 400, width: 400 }}>
            <DataGrid rows={props.restaurantList} columns={columns} pageSize={5} checkboxSelection 
                onRowSelected= { select => {
                    console.log(select);
                    if(select.isSelected){
                        props.setFoods(select.data.name);
                    }
                    else{
                        props.removeFoods(select.data.name);
                    }
                }}
            />
        </div>
    );
}