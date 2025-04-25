import React from "react";
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';


const data = [
];

const TableHero  = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: ' Order id',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Store',
        size: 150,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Status',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'Action',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'Payment Status',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, 
  });

  return (
    <div className="px-4 sm:px-8  lg:px-24 pb-10 pt-10">
      <button className="bg-blue-600 p-2 px-8  text-white mb-2 rounded-full">Back</button>
      <MaterialReactTable table={table} />
    </div>
  );
  };

export default TableHero;


