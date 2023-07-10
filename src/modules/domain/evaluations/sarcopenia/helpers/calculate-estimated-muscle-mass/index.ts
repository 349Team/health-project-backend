interface IEstimatedMuscleMass {
  weight: number;
  sex: string;
  race: string;
  height: number;
  age: number;
}

const calculateEstimatedMuscleMass = ({
  weight,
  sex,
  race,
  height,
  age,
}: IEstimatedMuscleMass) => {
  if (!weight) return 0;

  const sexValue = sex === 'Masculino' ? 1 : 0;
  let raceValue = 1.4;

  if (race === 'Branco') {
    raceValue = 0;
  } else if (race === 'Asiático') {
    raceValue = 1.2;
  }

  return (
    0.244 * weight +
    7.8 * height +
    6.6 * sexValue -
    0.098 * age +
    (raceValue - 3.3)
  );
};

export default calculateEstimatedMuscleMass;
