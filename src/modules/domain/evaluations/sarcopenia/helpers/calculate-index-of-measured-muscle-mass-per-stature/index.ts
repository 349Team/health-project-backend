import { ISarcopenia } from '../../interfaces/sarcopenia.interface';

const calculateIndexOfMeasuredMuscleMassPerStature = ({
  measuredMuscleMass,
  height,
}: Partial<ISarcopenia>) => {
  if (!height) return 0;

  return measuredMuscleMass / height ** 2;
};

export default calculateIndexOfMeasuredMuscleMassPerStature;
