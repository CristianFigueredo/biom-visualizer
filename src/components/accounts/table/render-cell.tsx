import { Bacteria } from './data';

interface Props {
  item: Bacteria;
  columnKey: keyof Bacteria;
}

export const RenderCell = ({ item, columnKey }: Props) => {
  return item[columnKey];
};
