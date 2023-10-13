import { useId } from 'react';

const Login = () => {
  const id = useId();

  return (
    <section className=' w-full h-full'>
      <h2 className='text-center font-bold text-6xl p-20 '>Log in</h2>
      <form className='flex flex-col items-center gap-8 font-semibold text-lg'>
        <div className='flex items-center'>
          <label className='inline-block w-28 mr-2' htmlFor={id}>
            아이디
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5'
            type='text'
            id={id}
            required
            placeholder='아이디를 입력해주세요'
          />
        </div>
        <div className='flex items-center'>
          <label className='inline-block w-28 mr-2' htmlFor={id}>
            비밀번호
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 '
            type='password'
            id={id}
            required
            placeholder='비밀번호를 입력해주세요'
          />
        </div>
        <button
          className='text-white bg-gray-800  font-medium rounded-lg text-sm px-14 py-2.5 mr-2 my-10'
          type='submit'
        >
          로그인
        </button>
      </form>
    </section>
  );
};

export default Login;
