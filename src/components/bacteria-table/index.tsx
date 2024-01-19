import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { Bacteria, bacterias, columns } from './data';

export const BacteriaTable = () => {
  return (
    <Table
      shadow='none'
      radius='none'
      isHeaderSticky
      aria-label='Example table with custom cells'
    >
      <TableHeader className='sticky' columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align='start'>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={bacterias}>
        {(item) => {
          return (
            <TableRow>
              {(columnKey: unknown) => (
                <TableCell>{item[columnKey as keyof Bacteria]}</TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
