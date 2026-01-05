import { useRef } from 'react';

export default function BrowserStoragePage() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const email = inputEmail.current?.value;
    const fullname = inputFullname.current?.value;

    // sessionStorage.setItem('user', JSON.stringify({ email, fullname }));
    document.cookie = `user={email: ${email}, fullname: ${fullname}}`;
  };

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputFullname = useRef<HTMLInputElement>(null);

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Type your email'
            ref={inputEmail}
          />
          <input
            type='text'
            placeholder='Type your fullname'
            ref={inputFullname}
          />
          <button type='submit'>Save</button>
        </form>
      </div>
    </>
  );
}
