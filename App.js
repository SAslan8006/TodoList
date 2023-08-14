import { createAppContainer } from 'react-navigation';
import BooksScreen from './src/screens/BooksScreen';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
    Books: BooksScreen
  },
  {
    initialRouteName: 'Books',
    defaultNavigationOptions: {
      title: 'Books'
    }
  }
);

export default createAppContainer(navigator);

