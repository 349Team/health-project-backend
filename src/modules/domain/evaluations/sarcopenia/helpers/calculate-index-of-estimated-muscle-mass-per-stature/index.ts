interface IcalculateIndexOfEstimatedMuscleMassPerStature {
  estimatedMuscleMass: number;
  height: number;
}

const calculateIndexOfEstimatedMuscleMassPerStature = ({
  estimatedMuscleMass,
  height,
}: IcalculateIndexOfEstimatedMuscleMassPerStature) => {
  if (!height) return 0;

  return estimatedMuscleMass / height ** 2;
};

export default calculateIndexOfEstimatedMuscleMassPerStature;
