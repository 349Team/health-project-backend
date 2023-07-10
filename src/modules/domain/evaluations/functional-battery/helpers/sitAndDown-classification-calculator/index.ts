import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateSitAndDownClassification = ({
    sitAndDownPercent,
}:Partial<IFunctionalBattery>) => {
    if(sitAndDownPercent > 70){
        return 'ÓTIMO'
    } else if (sitAndDownPercent > 54 ){
        return 'BOM'
    } else if (sitAndDownPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}