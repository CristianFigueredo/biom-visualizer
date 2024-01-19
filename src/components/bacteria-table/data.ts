import biom from './biom.json';
import { BIOM, Lineage } from '@/types/general';

const rawData = biom as BIOM;

export const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'TAX ID', uid: 'taxID' },
  { name: 'ABUNDANCE SCORE', uid: 'abundanceScore' },
  { name: 'RELATIVE ABUNDANCE', uid: 'relativeAbundance' },
  { name: 'HIT FREQUENCY', uid: 'hitFrequency' },
];

const convertDecimalToPercentage = (decimalNumber: number): string => {
  const percentage = (decimalNumber * 100).toFixed(2);
  if (percentage === '0.00') return '< 0.01%';
  return `${percentage}%`;
};

const adaptBiomObject = (biom: BIOM): Bacteria[] => {
  const dataMap = new Map();

  biom.data.forEach(([rowIndex, colIndex, value]) => {
    const id = `${rowIndex}${colIndex}`;
    dataMap.set(id, value);
  });

  return biom.rows.map((row, index) => {
    const lineage: Lineage[] = row.metadata.lineage;
    const strainLevel = lineage[7];

    return {
      name: strainLevel.name,
      taxID: String(strainLevel.tax_id),
      abundanceScore: String(dataMap.get(`${index}1`).toFixed(2)),
      relativeAbundance: convertDecimalToPercentage(dataMap.get(`${index}0`)),
      hitFrequency: String(dataMap.get(`${index}2`)),
    };
  });
};
export type Bacteria = {
  name: string;
  taxID: string;
  abundanceScore: string;
  relativeAbundance: string;
  hitFrequency: string;
};

export const bacterias = adaptBiomObject(rawData).map((bacteria, index) => ({
  ...bacteria,
  key: String(index),
})) as ({ key: string } & Bacteria)[];
