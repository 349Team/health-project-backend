export interface ICalculateBodyCompositionResult {
  sex: string;
  waistEstature: number;
  waistHip: number;
}

export interface ResultCalculateBodyCompositionResult {
  waistCircumference: string;
  rcq: string;
}

export const calculateBodyCompositionResult = ({
  sex,
  waistEstature,
  waistHip,
}: ICalculateBodyCompositionResult): ResultCalculateBodyCompositionResult => {
  let waistCircumference = 'none';
  let rcq = 'none';

  if (sex === 'Feminino') {
    if (waistEstature > 0.88) {
      waistCircumference = 'Risco elevado';
    } else if (waistEstature > 0.8) {
      waistCircumference = 'Risco aumentado';
    }

    if (waistHip > 1) {
      rcq = 'Risco elevado';
    } else if (waistHip > 0.85) {
      rcq = 'Risco aumentado';
    }
  } else {
    if (waistEstature > 1) {
      waistCircumference = 'Risco elevado';
    } else if (waistEstature > 0.94) {
      waistCircumference = 'Risco aumentado';
    }
    if (waistHip > 1) {
      rcq = 'Risco elevado';
    } else if (waistHip > 0.9) {
      rcq = 'Risco aumentado';
    }
  }

  return { waistCircumference, rcq };
};
