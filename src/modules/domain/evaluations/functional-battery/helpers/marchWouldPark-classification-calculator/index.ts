import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateMarchWouldParkClassification = ({
    marchWouldParkPercent,
}:Partial<IFunctionalBattery>) => {
    if(marchWouldParkPercent > 70){
        return 'ÓTIMO'
    } else if (marchWouldParkPercent > 54 ){
        return 'BOM'
    } else if (marchWouldParkPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}