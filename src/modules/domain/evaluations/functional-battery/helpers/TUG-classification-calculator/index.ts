import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateTugClassification = ({
    tugPercent,
}:Partial<IFunctionalBattery>) => {
    if(tugPercent > 70){
        return 'ÓTIMO'
    } else if (tugPercent > 54 ){
        return 'BOM'
    } else if (tugPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}