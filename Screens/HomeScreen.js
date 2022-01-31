import React from 'react';
import { Text, View, TouchableOpacity,FlatList } from 'react-native';
import { AuthContext } from '../components/AuthContext';
import Card from '../components/Card';

const restaurants = [
    {
      name: 'The Muffin Man Bakery',
      categories: 'Invited By Ashok',
      deliveryTime: '35 min',
      distance: '3.7 km',
      image: require('../assets/events.jpg'),
      id: 1,
    },
    {
      name: 'Central Perk Coffee House',
      categories: 'Invited By Ashok',
      deliveryTime: '45 min',
      distance: '4.3 km',
      image: require('../assets/events.jpg'),
      id: 2,
    },
    {
      name: 'WildBread Bakery',
      categories: 'Invited By Ashok',
      deliveryTime: '25 min',
      distance: '3 km',
      image: require('../assets/events.jpg'),
      id: 3,
    },
    // {
    //   name: "McDonald's",
    //   categories: 'Fast Food, Burgers, Desserts',
    //   deliveryTime: '20 min',
    //   distance: '2.5 km',
    //   image: require('../assets/events.jpg'),
    //   id: 4,
    // },
    {
      name: 'Jollibee',
      categories: 'Invited By Ashok',
      deliveryTime: '25 min',
      distance: '3.1 km',
      image: require('../assets/events.jpg'),
      id: 5,
    },
  ];

const HomeScreen = () => {
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>



            <FlatList
                    data={restaurants}
                    renderItem={({ item }) => {
                    return <Card info={item} />;
                    }}
                    keyExtractor={(restaurant) => restaurant.id.toString()}
                    showsVerticalScrollIndicator={false}
                />


          
        </View>
    )
};


export default HomeScreen;