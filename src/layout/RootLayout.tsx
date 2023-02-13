import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    // <div className='h-screen bg-dark-100'>
    <div className='h-screen bg-[#faf9f9]'>

      <div className='container mx-auto p-xy'>
        <Outlet />
      </div>
    </div>
  )
}
