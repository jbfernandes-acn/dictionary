import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/common/Navbar/Navbar';
import HomePage from './pages/HomePage'

test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(<Navbar />).toBeInTheDocument();
});
