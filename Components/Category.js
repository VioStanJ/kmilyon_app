import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { HOST, MEDIA } from '../const';
import pic from './../assets/img/picture.png'

const Category = ({ item , onPress,code}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.container,{backgroundColor:item.color,marginRight:10,elevation:2,
        borderWidth:code==item.code?1:0}]}>
      <Image source={item.image!=null?{uri:HOST+MEDIA+item.image}:pic} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:120,
    height:40,
    // padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  image: {
    width: 20, // Customize the image dimensions
    height: 20,
    resizeMode: 'cover',
  },
  text: {
    fontWeight: 'bold',
    color:'white'
  },
});

export default Category;
