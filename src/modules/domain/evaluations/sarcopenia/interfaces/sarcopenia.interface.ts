export interface ISarcopenia {
  sex: string;

  age: number;

  weight: number;

  race: string;

  height: number;

  measuredMuscleMass?: number;

  estimatedMuscleMass?: number;

  walkingSpeed: number;

  handGripStrength: number;

  calfCircumference: number;

  muscleMassIndex: number;

  date: Date;

  hasSarcopenia: boolean;

  result: string;
}
