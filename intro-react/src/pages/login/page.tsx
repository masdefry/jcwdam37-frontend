import { useFormik } from 'formik';
import { loginSchema } from '../../features/login/schemas/loginSchema';
import Backendless from '../../lib/backendless';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';

type User = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { setEmail } = useAuthStore();
  const navigate = useNavigate();

  const onLogin = async ({ username, password }: User) => {
    try {
      /*
        Query Builder Backendless.
        Gunanya untuk mencari data berdasarkan parameter tertentu di suatu tabel
      */
      const whereCondition = `username = '${username}' AND password = '${password}'`; // username = abc@gmail.com AND password = abc12345
      let queryBuilder = Backendless.DataQueryBuilder.create();
      queryBuilder.setWhereClause(whereCondition);

      /*
        Query builder digunakan untuk mencari data ke tabel User
      */
      const findUser: any = await Backendless.Data.of('User').find(
        queryBuilder
      );
      setEmail(findUser[0].username);
      toast.success('Login account successfull');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }) => {
      onLogin({ username, password });
    },
    validationSchema: loginSchema,
  });

  return (
    <>
      <form onSubmit={formik?.handleSubmit}>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Username</legend>
          <input
            name='username'
            id='username'
            onChange={formik?.handleChange}
            value={formik?.values?.username}
            type='text'
            className='input'
            placeholder='Type here'
          />
          <p className='label'>{formik?.errors?.username}</p>
        </fieldset>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Password</legend>
          <input
            name='password'
            id='password'
            onChange={formik?.handleChange}
            value={formik?.values?.password}
            type='password'
            className='input'
            placeholder='Type here'
          />
          <p className='label'>{formik?.errors?.password}</p>
        </fieldset>
        <button
          type='submit'
          className='btn bg-blue-300'
        >
          Login
        </button>
      </form>
    </>
  );
}
