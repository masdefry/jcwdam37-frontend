// import { useState } from 'react';

import { useState } from 'react';

// export default function StatePage() {
//   const [quantity, setQuantity] = useState<number>(0);

//   const onIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   function onDecrement() {
//     if(quantity != 0){
//         setQuantity(quantity - 1);
//     }
//   }

//   return (
//     <>
//       <div className='flex justify-center items-center'>
//         <button onClick={onDecrement}>-</button>
//         <h2>{quantity}</h2>
//         <button onClick={onIncrement}>+</button>
//       </div>
//     </>
//   );
// }

export default function StatePage() {
  const [num1, setNum1] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number>(0);

  const onHandleNum = (number: string) => {
    if (operator === '') {
      setNum1(num1 + number);
    } else {
      setNum2(num2 + number);
    }
  };

  const onHandleOperator = (operator: string) => {
    setOperator(operator);
  };

  const onHandleResult = () => {
    if (operator === '*') {
      setResult(Number(num1) * Number(num2));
    } else if (operator === '/') {
      setResult(Number(num1) / Number(num2));
    } else if (operator === '+') {
      setResult(Number(num1) + Number(num2));
    } else {
      setResult(Number(num1) - Number(num2));
    }
  };

  return (
    <div className='grid grid-cols-4 bg-gray-500 rounded-md gap-5 max-w-sm p-3'>
      <div className='col-span-4 flex justify-end bg-gray-100 p-1 rounded-md'>
        <h1 className='text-3xl font-bold text-black'>
          {result ? (
            result
          ) : (
            <>
              {num1}
              {operator}
              {num2}
            </>
          )}
        </h1>
      </div>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('7')}
      >
        7
      </button>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('8')}
      >
        8
      </button>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('9')}
      >
        9
      </button>
      <button
        className='bg-orange-300 rounded-sm p-1'
        onClick={() => onHandleOperator('/')}
      >
        /
      </button>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('4')}
      >
        4
      </button>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('5')}
      >
        5
      </button>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('6')}
      >
        6
      </button>
      <button
        className='bg-orange-300 rounded-sm p-1'
        onClick={() => onHandleOperator('*')}
      >
        x
      </button>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('1')}
      >
        1
      </button>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('2')}
      >
        2
      </button>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('3')}
      >
        3
      </button>
      <button
        className='bg-orange-300 rounded-sm p-1'
        onClick={() => onHandleOperator('-')}
      >
        -
      </button>
      <button
        className='bg-white rounded-sm p-1'
        onClick={() => onHandleNum('0')}
      >
        0
      </button>
      <button
        className='bg-orange-300 rounded-sm p-1'
        onClick={() => onHandleOperator('.')}
      >
        .
      </button>
      <button
        className='bg-green-300 rounded-sm p-1'
        onClick={onHandleResult}
      >
        =
      </button>
      <button
        className='bg-orange-300 rounded-sm p-1'
        onClick={() => onHandleOperator('+')}
      >
        +
      </button>
    </div>
  );
}
