import * as ReactDOM from "react-dom"
import { getQueriesForElement } from '@testing-library/react-dom';
import App from '../App';

test('renders content', () => {
  
  const root = document.createElement('div');
  ReactDOM.render(<App />, root);
  const  { getByText } = getQueriesForElement(root);
  getByText("Home").not.toBeNull();

});
