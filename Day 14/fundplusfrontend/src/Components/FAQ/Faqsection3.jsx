import React,{useState} from 'react'
import { Collapse, Button } from "@material-tailwind/react";
import Faqs2 from "../../Datas/Faq2";

export const Faqsection3 = () => {
   const [open, setOpen] = useState(false);
   const [id, setId] = useState(0);
   const toggleOpen = (i) => {
     setId(i);
     setOpen((cur) => !cur);
   };
  return (
    <>
      <main>
        <section className="w-full grid place-content-center  bg-[#fbf7ed] ">
          <div className="flex lg:flex-col items-center lg:gap-12 lg:px-5 xl:justify-evenly   w-screen  ">
            <figure className=''>
              <img
              src="https://res.cloudinary.com/dalynypf0/image/upload/v1695536483/1_tb9dyo.svg"
                alt=""
                width="600"
              />
            </figure>
            <div className="flex flex-col xl:mt-32 gap-10 xl:w-[35em]  items-start">
              <p className="xl:text-5xl  lg:text-2xl font-bold text-darkteal ">
                My account
              </p>
              <div>
                <div className=" xl:py-12">
                  {Faqs2.map((faqs, index) => (
                    <>
                      <div className="flex flex-col   py-3 cl  w-full ">
                        <button
                          className="flex xl:items-center gap-5 text-darkteal xl:text-2xl"
                          onClick={() => toggleOpen(faqs.id)}>
                          <span>
                            {open && faqs.id === id ? (
                              <i class="fa-solid fa-angle-up"></i>
                            ) : (
                              <i class="fa-solid fa-angle-down"></i>
                            )}
                          </span>
                          <span className="font-bold text-darkteal ">
                            {faqs.question}
                          </span>
                        </button>
                      </div>
                      <Collapse
                        className="text-justify flex items-center justify-center mt-4 lg:text-sm  "
                        open={open && faqs.id === id}>
                        <p className="text-[#838f8c]">{faqs.answer}</p>
                      </Collapse>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
