import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateSitAndReachYourFeetClassification = ({
    sitAndReachYourFeetPercent,
}:Partial<IFunctionalBattery>) => {
    if(sitAndReachYourFeetPercent > 70){
        return 'ÓTIMO'
    } else if (sitAndReachYourFeetPercent > 54 ){
        return 'BOM'
    } else if (sitAndReachYourFeetPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}