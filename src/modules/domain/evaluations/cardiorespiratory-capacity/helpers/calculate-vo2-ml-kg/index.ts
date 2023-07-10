import { ICardiorespiratoryCapacity } from '../../interface/cardiorespiratory-capacity.interface';

export const calculateVO2MlKg = ({
  weight,
  vo2Lmin,
}: Partial<ICardiorespiratoryCapacity>) => {
  if (!weight) {
    return 0;
  }

  const result = (vo2Lmin * 1000) / weight;

  return +result;
};
