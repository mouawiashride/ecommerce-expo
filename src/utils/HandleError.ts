

import { ToastAndroid } from 'react-native';
import { Errors } from '../interfaces/Errors';


export const HandleError=(error:Errors)=>{
    // ToastAndroid.show("fd",2000);
    ToastAndroid.show(error?.response?.data  || error.message,2000);
}
