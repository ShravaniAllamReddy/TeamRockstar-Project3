import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'foodOptions', headerName: 'Food Options', width: 220 },
];

const rows = [
    { id: 1, foodOptions: 'Pasta' },
    { id: 2, foodOptions: 'Tacos' },
    { id: 3, foodOptions: 'Noodles' },
    { id: 4, foodOptions: 'BakedChicken' },
    { id: 5, foodOptions: 'Pizza' },
    { id: 6, foodOptions: 'Burger' },
    { id: 7, foodOptions: 'Chicken Salad' },
    { id: 8, foodOptions: 'Chicken Sandwich' },
    { id: 9, foodOptions: 'Beef Burger' },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}