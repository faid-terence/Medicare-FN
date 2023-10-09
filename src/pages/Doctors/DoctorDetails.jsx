import doctorImage from '../../assets/images/doctor-img02.png'


export const DoctorDetails = () => {
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className='flex items-center gap-5'>
            <figure className='max-w-[200px] max-h-[200px]'>
              <img src={doctorImage} alt="" className='w-full' />
            </figure>

            <div>
              <span className='bg-[#CCFOF3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]'>Surgeon</span>
              <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Martin ISHIMWE</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
