export default function TailwindCssPage() {
  return (
    <>
      <h1 className='text-2xl text-blue-700 bg-yellow-400'>Purwadhika</h1>
      <p className='text-[32px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusamus
        tenetur error, sed sapiente odio, doloribus delectus, facere
        reprehenderit voluptatibus ad dolorem fugit neque nam eligendi expedita
        magnam! Accusamus, labore.
      </p>

      {/* display: grid; grid-template-column: 12; */}
      <div className='grid grid-cols-12'>
        {/* grid-column: 1/4 */}
        <div className='bg-red-500 col-span-3'>Col-01</div>
        <div className='bg-yellow-500 col-start-1 col-end-3'>Col-02</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
        <div className='bg-red-500'>Col-01</div>
      </div>

      <h1 className='text-green-300 md:text-green-600 lg:text-green-900'>
        Purwadhika School
      </h1>
    </>
  );
}
