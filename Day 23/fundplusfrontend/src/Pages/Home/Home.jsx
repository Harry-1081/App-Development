import Footer from "../../Components/Footercomponents/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import React, { useEffect } from 'react'
import {AiOutlineSafety} from 'react-icons/ai';
import {BsArrowRightCircle} from 'react-icons/bs';

function Home() {
  useEffect(() => {
    const counters = document.querySelectorAll('.box4-value');
    const speed = 200;
    counters.forEach((counter) => 
    {
        const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
            const count = parseInt(counter.innerText);
            const increment = Math.trunc(target / speed);
            if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCount()
    });
    // eslint-disable-next-line
},[]);

  return (
    <>
    <Navbar/>
    <div className='Home bg-blue-50 mt-[20px]'>

      {/* Division 1 */}
      <div className='lg:flex justify-center'>

        <div class='box1-main flex justify-evenly lg:flex-col xl:h-[800px] lg:h-[850px]'>
          
            <div class="box1-left justify-center relative xl:w-[540px] xl:h-[620.8px] lg:w-[319.6px] lg:h-[378.34px] lg:pl-[5%]">
                <p class="box1l-head absolute xl:top-[32%] xl:text-6xl font-sans lg:top-[22%] lg:text-4xl">
                    <b>Fundraising for<br/>the people and<br/>cause you care<br/></b></p>

                <p class="box1l-subhead absolute xl:top-[63.5%] xl:text-2xl font-sans lg:top-[64%] lg:text-[0.8rem] ">
                    We provide a trusted donation channel for peoples<br/>of worldwide to support people and organizers.<br/></p>
                    
                <button class="box1l-btn1 absolute xl:top-[78%] lg:top-[84%] xl:w-[168.89px] lg:w-[134px] xl:h-[54.4px] lg:h-[51px]
                bg-[#396c61] text-white rounded-[50px]"><b>Get started</b></button>

                <button class="box1l-btn2 absolute xl:top-[78%] xl:ml-[180px] lg:ml-[140px] lg:top-[84%] xl:w-[168.89px] lg:w-[134px]
                xl:h-[54.4px] lg:h-[51px] bg-blue-50 text-[#396c61] border-[0.01rem] border-[#666565] rounded-[50px]"><b>Learn more</b></button>
            </div>

            <div class="relative  box1-right xl:w-[560px] xl:h-[780px] lg:w-[320px] lg:h-[503.35px] lg:pl-[2%]">
                <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099994/homapage-hero_x7wfqe.png" 
                class="box1r-img1 pt-[70px] xl:w-[540px] xl:h-[662.05px] lg:w-[310.6px] lg:h-[410.46px]" alt="girl"></img>

                <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099993/homapage-hero-widget-1_uvokwd.png" alt="people"
                class="box1r-img2 absolute xl:w-[300px] xl:h-[177.6px] lg:w-[150px] lg:h-[98.4px] xl:top-[12%] xl:left-[49%] lg:top-[15%] lg:left-[50%]"></img>

                <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099993/homapage-hero-widget-2_kqoizz.png" alt="donation"
                class="box1r-img3 absolute xl:w-[400px] xl:h-[179.2px] lg:w-[225px] lg:h-[113.35px] xl:top-[72%] xl:left-[32%] lg:top-[71%] lg:left-[28%]"></img>

                <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099993/homapage-hero-widget-3_gasgjr.png" alt="hand"
                class="box1r-img4 absolute xl:w-[180px] xl:h-[173.88px] lg:w-[120px] lg:h-[115.9px] xl:top-[25%] xl:left-[-7%] lg:top-[22%] lg:left-[-7%]"></img>
              </div>
            </div>

          </div>



          {/* Division 2 */}
          <div className='flex justify-center xl:pt-[20px] lg:pt-[20px]'>
            <div className='box2-main flex lg:flex lg:justify-center xl:w-[80%] xl:hover:w-[100%] transition-all duration-[1s] xl:h-[800px] lg:w-[100%]
            lg:h-[400px] bg-[#396c61] items-center xl:rounded-[20px] xl:hover:rounded-none xl:hover:pl-[250px] xl:pl-[125px]'>

              <div className='box2-content'>

                <div className='flex xl:pb-[10px] lg:pb-[10px]'>
                  <p className='box2-head xl:text-[1.3rem] pt-[5px] text-white font-sans'><AiOutlineSafety/></p>
                  <p className='box2-head xl:text-[1.3rem] text-white font-sans'>&nbsp; Trust and Safety</p>
                </div>

                <p className='box2-subhead mb-[10px] xl:text-4xl lg:text-3xl text-white font-inclusiveSans font-semibold'>We have your back.</p>
                
                <p className='box2-para leading-5 xl:text-3xl lg:text-[0.8rem] mb-[20px] text-white font-inclusiveSans'>
                  With a global team dedicated to trust and
                  <br/>safety, we've successfully managed fundraisers
                  <br/>worldwide for more than a decade. Don't worry
                  <br/>about a thing, we've got you covered.
                </p>

                <p className='box2-linker xl:text-[1.3rem] text-black-50 font-bold text-[#878383]'>Explore trust and safety {'>'}</p>
              </div>

            </div>
          </div>



          {/* Division 3 */}
          <div className='lg:flex lg:justify-center lg:pt-[60px] lg:pb-[60px]'>
            <div className='box-3 xl:flex justify-evenly lg:flex-col lg:space-y-6 lg:h-[1350px] xl:h-[600px] items-center'>

              <div className='box3-text lg:pl-[30px] lg:pt-[30px] lg:pb-[10px]'>
                <p className='box3-head font-bold font-poppins text-[#282626] text-1xl pb-[5px]'>Make your Impact</p>
                <p className='box3-head font-bold font-poppins text-4xl xl:hidden'>Fundraise for...</p>
                <p className='box3-head font-bold font-poppins text-4xl lg:hidden'>Fundraise<br/>for...</p>
              </div>

              <div className='box3-img1 relative w-[262.8px] h-[369.8px] rounded-[50px] xl:border-blue-50 lg:border-[#396c61] xl:hover:border-[#396c61] border-2'>
                <img src='https://res.cloudinary.com/dnq6fx1oj/image/upload/v1696564625/start-yourself_dc6pqd.png' alt='yourself' 
                className='absolute top-[10%] left-[10%]'></img>
                <p className='absolute text-[1.6rem] font-semibold top-[65%] left-[32%]'>Yourself</p>
                <button className='absolute text-3xl font-semibold top-[82%] left-[45%]'><BsArrowRightCircle/></button>
              </div>

              <div className='box3-img2 relative w-[262.8px] h-[369.8px] rounded-[50px] xl:border-blue-50 lg:border-[#396c61] xl:hover:border-[#396c61] border-2'>
                <img src='https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695364207/start-friends-family_bo9nyy.png' alt='fam' 
                className='absolute top-[10%] left-[10%]'></img>
                <p className='absolute text-[1.6rem] font-semibold top-[65%] left-[16%]'>Friends & family</p>
                <button className='absolute text-3xl font-semibold top-[82%] left-[45%]'><BsArrowRightCircle/></button>
              </div>

              <div className='box3-img3 relative w-[262.8px] h-[369.8px] rounded-[50px] xl:border-blue-50 lg:border-[#396c61] xl xl:hover:border-[#396c61] border-2'>
                <img src='https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695364207/start-charity_gthcdv.png' alt='society' 
                className='absolute top-[10%] left-[10%]'></img>
                <p className='absolute text-[1.6rem] font-semibold top-[65%] left-[34%]'>Society</p>
                <button className='absolute text-3xl font-semibold top-[82%] left-[45%]'><BsArrowRightCircle/></button>
              </div>

            </div>
          </div>



        {/* Division 4 */}
        <div class="box4 relative flex items-center xl:justify-evenly lg:flex-col lg:justify-center xl:h-[331px] lg:h-[400px] bg-[#396c61]">

            <div class='counter w-[320px] xl:h-[91px] lg:h-[124px] text-center pt-[15px]'>
                <span data-target="20000" class="box4-value text-6xl text-white font-bold">0</span>
                <span class="box4-f1-head xl:text-2xl lg:1xl text-white"><br/>Signatures every hours<br/></span>
            </div>

            <div class='counter w-[320px] xl:h-[91px] lg:h-[124px] text-center pt-[15px]'>
                <span data-target="50000" class="box4-value text-6xl text-white font-bold">0</span>
                <span class="box4-f2-head xl:text-2xl lg:1xl text-white"><br/>Victory each month<br/></span>
            </div>

            <div class='counter w-[320px] xl:h-[91px] lg:h-[124px] text-center pt-[15px]'>
                <span data-target="1000000" class="box4-value text-6xl text-white font-bold">0</span>
                <span class="box4-f3-head xl:text-2xl lg:1xl text-white"><br/>Fundraised per year<br/></span>
            </div>

          </div>



          {/* Division 5 */}
          <div className='lg:flex lg:justify-center lg:pb-[50px] lg:pt-[50px]'>
            <div className='box5-main xl:flex xl:justify-evenly lg:flex-col items-center xl:h-[600px]'>

              <div className='box5-text lg:h-[200px] lg:pt-[20px] lg:pl-[8%]'>
                <p className='box5-head xl:text-4xl lg:text-[1.3rem] font-semibold font-poppins pb-[20px]'>Ready to get started? Join<br/>thousands of others today.</p>
                <button className='box5-btn1 xl:w-[168.89px] font-semibold lg:w-[120px] xl:h-[54.4px] lg:h-[45px] bg-[#396c61] text-blue-50 rounded-[50px]'>Start an event</button>
                <button className='box5-btn2 xl:w-[168.89px] font-semibold lg:w-[120px] xl:h-[54.4px] lg:h-[45px] ml-[20px] bg-blue-50 text-[#396c61] border-[0.01rem] border-[#504f4f] rounded-[50px]'>Know more</button>
              </div>

              <div className='box5-image'>
                <img src='https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695376787/footer-flower-cta_y2zrga.png' alt='flower'
                className='lg:w-[300px] lg:h-[300px]'></img>
              </div>

            </div>
          </div>

      </div>
      <Footer/>
    </>
  );
}

export default Home;

