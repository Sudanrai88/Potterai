import { useRouter } from "next/router"

function Success() {
    const router = useRouter();
  return (
    <div  className='flex items-start justify-center h-[50vh] sm:h-[50vh] md:h-[50vh] bg-fixed bg-center bg-cover ' style={{ 'background-color': "black" }}>
    <div className='flex flex-col w-[610px] text-white tracking-[0.05em]'>
        <div className='Top z-[1] mb-[20px] mt-[100px] md:mt-[120px] sm:mt-[120px] lg:mt-[120px]'>
            <div className='border p-3 text-center mb-[30px]'>
                <div className="">
                    <p className='py-2 text-base'> Thanks for the email {router.query.from_name}  🏺 </p>
                </div>
                <div>
                    <p className='py-2 text-base '> We have sent you an email over at {router.query.email_id}. We will get back to you as soon as we can!  </p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Success