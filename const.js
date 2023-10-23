import { Dimensions } from "react-native";

export const HOST = 'http://50.17.81.212'
export const URL = 'http://50.17.81.212/api/v1'
export const MEDIA = '/static/';

export function getWidth(){
    let width = Dimensions.get("window").width
  
    // Horizontal Padding = 20...
    width = width - 80
  
    // Total five Tabs...
    return width / 5
}

export function formatMoney(number){
    // Check if the input is a valid number
    if (isNaN(number)) {
      return 'Invalid number';
    }
  
    // Convert the number to a string and split it into integer and decimal parts
    const parts = number.toFixed(2).toString().split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];
  
    // Use regular expressions to add space separators for thousands
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  
    // Combine the formatted integer and decimal parts
    const formattedMoney = `${formattedInteger}.${decimalPart}`;
  
    return formattedMoney;
  }