import './App.css';
import { useState } from 'react';
import { Button } from '../components/button/button';
import { CreditCalculatorModal } from '../components/modals/credit-calculator-modal/credit-calculator-modal';

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleSetIsModalOpen = () => {
    setIsModalOpened(p => !p)
  }

  return (
    <section className='outer-block'>
      <CreditCalculatorModal isOpened={isModalOpened} onClose={handleSetIsModalOpen} />
      <Button className='big-button transparent-button' onClick={handleSetIsModalOpen}>Расчет платежей</Button>
    </section>
  );
}

export default App;
