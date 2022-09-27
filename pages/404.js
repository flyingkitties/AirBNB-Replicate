import Link from 'next/link'

export default function FourOhFour() {
  return (

  <div >
    <h1 className=' mx-auto text-center py-5'>404 - Page Not Found</h1>
    <Link className='mx-auto grid' href="/">
      <a className='flex py-20 font-semibold text-center box-content'>
        Go back to the home page
      </a>
    </Link>
    </div>
  )
}