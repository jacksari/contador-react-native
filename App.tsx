 import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlexScreen } from './src/screens/FlexScreen';

 const App = () => {

   return (
     //<ContadorScreen/>
     <SafeAreaView style={{
       flex: 1
     }}>
       <FlexScreen/>
     </SafeAreaView>
     
   );
 };


 export default App;
