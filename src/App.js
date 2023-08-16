import { createAppContainer } from 'react-navigation';
import BooksScreen from './src/screens/BooksScreen';
import { createStackNavigator } from 'react-navigation-stack';
import BookDetailScreen from './src/screens/BookDetailScreen';

const navigator = createStackNavigator(
  {
    Books: BooksScreen,
    BookDetail: BookDetailScreen
  },
  {
    initialRouteName: 'Books',
    defaultNavigationOptions: {
      title: 'Books'
    }
  }
);

export default createAppContainer(navigator);

