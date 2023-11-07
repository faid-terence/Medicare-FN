import React from "react";
import { formateDate } from "../../utilities/formulateDate";
export const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About Of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Martin ISHIMWE
          </span>
        </h3>
        <p className="text__para">
          A surgeon doctor is a highly skilled medical professional specializing
          in surgical procedures. They diagnose, treat, and manage medical
          conditions through precise surgical interventions, playing a crucial
          role in healthcare. Surgeons undergo extensive training and education
          to perform various surgeries, from routine procedures to complex
          life-saving operations. Their expertise and steady hands are vital in
          improving patients' health and saving lives.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("09-16-2017")} - {formateDate("07-04-2023")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("1-23-2011")} - {formateDate("08-12-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Masters in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Hospital of Cincinatti , Cincinatti
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor tex-[15px] leading-6 font-semibold">
              {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Senior Surgeon
            </p>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Hospital of Cincinatti , Cincinatti
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor tex-[15px] leading-6 font-semibold">
              {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Senior Surgeon
            </p>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Hospital of Cincinatti , Cincinatti
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
