import {DoctorCard} from '../../components/OurDoctors/DoctorCard'
import {doctors} from '../../assets/data/doctors'

export const Doctors = () => {
  return (
    <section className='bg-[#fff9ea]'>
      <div className="container text-center">
        <h2 className="heading">Find a doctor</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search a Doctor' />
        </div>
      </div>
    </section>
  )
}
