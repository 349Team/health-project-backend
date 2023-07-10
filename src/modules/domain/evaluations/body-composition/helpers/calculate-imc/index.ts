interface ICalculateImc {
  weight: number;
  height: number;
}

export const calculateImc = ({ weight, height }: ICalculateImc): number =>
  weight / (height / 100) ** 2;
