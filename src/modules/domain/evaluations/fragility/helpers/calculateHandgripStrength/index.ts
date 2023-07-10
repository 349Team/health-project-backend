interface ICalculateHandgripStrength {
  handgripStrength: number;
  imc: number;
  sex: string;
}

const calculateHandgripStrength = ({
  handgripStrength,
  imc,
  sex,
}: ICalculateHandgripStrength) => {
  if (sex === 'Masculino') {
    if (handgripStrength <= 29 && imc <= 24) {
      return 1;
    } else if (handgripStrength <= 30) {
      if (imc >= 24.1 && imc <= 26) {
        return 1;
      } else if (imc >= 26.1 && imc <= 28) {
        return 1;
      }
    } else if (handgripStrength <= 32 && imc >= 29) {
      return 1;
    }
  } else if (sex === 'Feminino') {
    if (handgripStrength <= 17 && imc <= 23) {
      return 1;
    } else if (handgripStrength <= 17.3) {
      if (imc >= 25.1 && imc <= 26) {
        return 1;
      }
    }
    if (handgripStrength <= 18) {
      if (imc >= 26.1 && imc <= 29) {
        return 1;
      }
    } else if (handgripStrength <= 21 && imc >= 29) {
      return 1;
    }
  }

  return 0;
};

export default calculateHandgripStrength;
