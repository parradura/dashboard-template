
export default function Home() {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-10'>Home</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'> 
        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <p>Col-6</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <p>Col-6</p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6'> 
        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <p>Col-4</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <p>Col-4</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <p>Col-4</p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6'> 
        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <p>Col-3</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <p>Col-3</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <p>Col-3</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-sm'>
          <p>Col-3</p>
        </div>
      </div>
    </div>
  )
}
