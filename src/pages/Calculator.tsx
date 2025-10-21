import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    if (previousValue !== null && !newNumber) {
      calculate();
    }
    setPreviousValue(display);
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (previousValue === null || operation === null) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        result = current !== 0 ? prev / current : 0;
        break;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const backspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
      setNewNumber(true);
    }
  };

  const buttons = [
    ['C', '⌫', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <nav className="p-6">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <Icon name="ArrowLeft" size={20} />
            Назад
          </Button>
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 shadow-2xl bg-white">
          <div className="mb-8">
            <div className="bg-gray-50 rounded-lg p-6 mb-2 min-h-[80px] flex items-center justify-end border-2 border-gray-100">
              <p className="text-5xl font-light text-gray-800 break-all text-right">
                {display}
              </p>
            </div>
            {operation && previousValue && (
              <p className="text-sm text-gray-500 text-right px-2">
                {previousValue} {operation}
              </p>
            )}
          </div>

          <div className="grid gap-3">
            {buttons.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 gap-3">
                {row.map((btn) => {
                  const isOperation = ['÷', '×', '-', '+', '='].includes(btn);
                  const isSpecial = ['C', '⌫'].includes(btn);
                  const isZero = btn === '0';

                  return (
                    <Button
                      key={btn}
                      onClick={() => {
                        if (btn === 'C') clear();
                        else if (btn === '⌫') backspace();
                        else if (btn === '=') calculate();
                        else if (btn === '.') handleDecimal();
                        else if (isOperation) handleOperation(btn);
                        else handleNumber(btn);
                      }}
                      variant={isOperation ? 'default' : 'outline'}
                      className={`h-16 text-xl font-medium transition-all hover:scale-105 ${
                        isZero ? 'col-span-2' : ''
                      } ${
                        isOperation
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : ''
                      } ${
                        isSpecial
                          ? 'bg-red-50 text-red-600 hover:bg-red-100 border-red-200'
                          : ''
                      }`}
                    >
                      {btn}
                    </Button>
                  );
                })}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Calculator;
