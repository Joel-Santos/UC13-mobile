import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
   
      <NavigationContainer>
        <StatusBar 
          barStyle="dark-content" 
          backgroundColor='#f0f4ff'
        
        />
        <Routes/>
      </NavigationContainer>


  
  );
}

