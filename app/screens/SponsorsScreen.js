import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../assets/components/Screen';
import Company from '../assets/components/Company';


function SponsorsScreen(props) {
    return (
       <Screen>
           <FlatList>
            <Company source={require('../assets/graphics/alabama.jpg')}>Deliotte</Company>
           </FlatList>
       </Screen>
    );
}

export default SponsorsScreen;