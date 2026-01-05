import * as Yup from 'yup';

export const createProductSchema = Yup.object().shape({
  name: Yup.string()
    .required('Product name is required')
    .max(100, 'Maximum characters is 100'),
  price: Yup.number()
    .required('Product price is required')
    .min(1, 'Minimum price is Rp. 1'),
  stock: Yup.number()
    .required('Product stock is required')
    .min(1, 'Minimum stock is 1'),
});
