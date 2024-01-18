export const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'TAX ID', uid: 'taxID' },
  { name: 'ABUNDANCE SCORE', uid: 'abundanceScore' },
  { name: 'RELATIVE ABUNDANCE', uid: 'relativeAbundance' },
  { name: 'U. M. FREQUENCY', uid: 'uniqueMatchesFrequency' },
];

const bacteriaPlaceholder = {
  name: 'Lactobacillus crispatus SJ-3C-US',
  taxID: '575598',
  abundanceScore: '139028.29',
  relativeAbundance: '94.43%',
  uniqueMatchesFrequency: '1362',
};

export type Bacteria = typeof bacteriaPlaceholder;

export const bacterias = Array(100)
  .fill(null)
  .map((_, index) => ({
    ...bacteriaPlaceholder,
    key: String(index),
  })) as ({ key: string } & Bacteria)[];
