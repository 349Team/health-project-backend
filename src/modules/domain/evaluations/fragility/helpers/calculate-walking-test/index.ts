interface IWalkingTest {
  time: number;
  stature: number;
  sex: string;
}

const calculateWalkingTest = ({ time, stature, sex }: IWalkingTest) => {
  if (sex === 'Masculino') {
    if (time > 7 && stature <= 1.73) {
      return 1;
    }

    if (time > 6 && stature > 1.73) {
      return 1;
    }
  }

  if (sex === 'Feminino') {
    if (time > 7 && stature <= 1.73) {
      return 1;
    }

    if (time > 6 && stature > 1.59) {
      return 1;
    }
  }

  return 0;
};

export default calculateWalkingTest;
