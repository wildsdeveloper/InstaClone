import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ color: colors.primary, fontSize: font.size.xl  }}>Hello World!</Text>
      <AntDesign name='home' size={24} />
    </View>
  );
};

export default App;
