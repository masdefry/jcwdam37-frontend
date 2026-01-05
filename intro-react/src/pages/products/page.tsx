import { useEffect, useState } from 'react';
import Backendless from '../../lib/backendless';
import { useFormik } from 'formik';
import { createProductSchema } from '../../features/products/schemas/createProductSchema';

export default function ProductPage() {
  const [products, setProducts] = useState<any[]>([]);

  const onGetProducts = async () => {
    try {
      const products = await Backendless.Data.of('Product').find();

      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateProduct = async (values: any) => {
    try {
      await Backendless.Data.of('Product').save(values);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetProducts();
  }, []); // component did mount

  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      stock: 0,
    },
    onSubmit: (values) => {
      onCreateProduct(values);
    },
    validationSchema: createProductSchema,
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product Name</legend>
            <input
              name='name'
              id='name'
              onChange={formik.handleChange}
              value={formik?.values?.name}
              type='text'
              className='input'
              placeholder='Type here'
            />
            <p className='label'>{formik?.errors?.name}</p>
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product Price</legend>
            <input
              name='price'
              id='price'
              onChange={formik.handleChange}
              value={formik?.values?.price}
              type='number'
              className='input'
              placeholder='Type here'
            />
            <p className='label'>{formik?.errors?.price}</p>
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product Stock</legend>
            <input
              name='stock'
              id='stock'
              onChange={formik.handleChange}
              value={formik?.values?.stock}
              type='number'
              className='input'
              placeholder='Type here'
            />
            <p className='label text-red-500'>{formik?.errors?.stock}</p>
          </fieldset>
          <button
            type='submit'
            className='btn bg-blue-300'
          >
            Submit
          </button>
        </form>
      </div>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((value: any, index: number) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{value?.name}</td>
                  <td>Rp. {value?.price?.toLocaleString('id-ID')}</td>
                  <td>{value?.stock}</td>
                  <td>
                    <button className='btn bg-red-300'>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
