import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateElbowFlexionClassification = ({
    elbowFlexionPercent,
}:Partial<IFunctionalBattery>) => {
    if(elbowFlexionPercent > 70){
        return 'ÓTIMO'
    } else if (elbowFlexionPercent > 54 ){
        return 'BOM'
    } else if (elbowFlexionPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}