// import { useState } from 'react';

// export default function RefPage() {
//   const [input, setInput] = useState<string>('');

//   const onSubmit = (event: any) => {
//     event.preventDefault();
//     console.log(input);
//   };
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <input
//           type='text'
//           placeholder='Type your Input'
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button type='submit'>Submit Form</button>
//       </form>
//     </>
//   );
// }

import { useRef } from 'react';

export default function RefPage() {
  const input = useRef<HTMLInputElement>(null);

  const onSubmit = (event: any) => {
    event.preventDefault(); // Avoid refresh
    console.log(input?.current?.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Type your Input'
          ref={input}
        />
        <button type='submit'>Submit Form</button>
      </form>
    </>
  );
}
