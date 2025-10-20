import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './style/global.css';
import './style/theme.css';
export function App() {
  return (
    <>
      <Heading>
        Olá mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <h2>Meu primeiro componente!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad
        voluptatum natus fugiat, iure minima quasi, temporibus sed aperiam
        tempora enim eligendi ipsam ducimus error ipsa vero. Ullam, alias
        provident?
      </p>
    </>
  );
}
