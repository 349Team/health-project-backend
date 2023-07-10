interface ICalculateDensity {
  sex: string;
  sumPleats: number;
}

export const calculateDensity = ({
  sex,
  sumPleats,
}: ICalculateDensity): number => {
  if (sex === 'Feminino') {
    return 1.1715 - 0.0779 * Math.log10(sumPleats);
  }
  return 1.1567 - 0.0717 * Math.log10(sumPleats);
};
