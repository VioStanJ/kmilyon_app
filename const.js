import { Dimensions } from "react-native";

export const HOST = 'http://50.17.81.212'
export const URL = 'http://50.17.81.212/api/v1'
export const MEDIA = '/static/';

export const getWidth = () => {
    let width = Dimensions.get("window").width
  
    // Horizontal Padding = 20...
    width = width - 80
  
    // Total five Tabs...
    return width / 5
}