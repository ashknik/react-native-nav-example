import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const iconColor = '#6c5ce7';
const Card = ({ info }) => {
  const { name, categories, deliveryTime, distance, image } = info;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={image} />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text style={styles.categoryStyle}>{categories}</Text>

          {/* <MaterialIcons name="access-time"  color={iconColor} />     
             <Text style={styles.categoryStyle}>
              {deliveryTime}
              </Text> */}

          {/* <View style={styles.iconLabelStyle}>
            <MaterialIcons name="access-time"  color={iconColor} />
                <Text style={styles.newStyle}  >{deliveryTime}</Text>
            <MaterialIcons name="location-pin" label={distance} color={iconColor} />
                  <Text style={styles.newStyle}  >{distance}</Text>
          </View> */}
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#abdbe3',
    height: 200,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
  },
  categoryStyle: {
    fontWeight: '200',
  },
  newStyle: {
    fontWeight: '600',
    fontSize: 15,
  },

  
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 0,
  },
});

export default Card;