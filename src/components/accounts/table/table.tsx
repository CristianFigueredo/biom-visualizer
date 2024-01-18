import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { columns, bacterias, Bacteria } from './data';
import { RenderCell } from './render-cell';

// More examples: https://nextui.org/docs/components/table
export const TableWrapper = () => {
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
                <TableCell>
                  {RenderCell({
                    item,
                    columnKey: columnKey as keyof Bacteria,
                  })}
                </TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
