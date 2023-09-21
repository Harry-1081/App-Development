import React from 'react'
import logo from '../../Assets/Images/logo.svg';

export const Landingsection1 = () => {
  return (
    <>
       <div class='box1-main flex justify-evenly lg:flex-col h-[800px] bg-blue-50 items-center'>

          <div class="box1-left relative xl:w-[540px] xl:h-[620.8px] lg:w-[335.6px] lg:h-[378.34px] lg:pl-[8px]">

              <span class="box1l-head absolute xl:top-[32%] xl:text-6xl font-sans lg:top-[22%] lg:text-4xl">
                  <b>Fundraising for<br/>the people and<br/>cause you care<br/></b></span>

              <span class="box1l-subhead absolute xl:top-[63.5%] xl:text-2xl font-sans lg:top-[64%] lg:text-[0.8rem] ">
                  We provide a trusted donation channel for peoples<br/>of worldwide to support people and organizers.<br/></span>
                  
              <button class="box1l-btn1 absolute xl:top-[78%] lg:top-[88%] xl:w-[168.89px] lg:w-[134px] xl:h-[54.4px] lg:h-[51px]
              bg-[#396c61] text-white rounded-[50px]"><b>Get started</b></button>

              <button class="box1l-btn2 absolute xl:top-[78%] xl:ml-[180px] lg:ml-[150px] lg:top-[88%] xl:w-[168.89px] lg:w-[134px]
              xl:h-[54.4px] lg:h-[51px] bg-white text-[#396c61] rounded-[50px]"><b>Learn more</b></button>

          </div>

          <div class="relative box1-right xl:w-[560px] xl:h-[780px] lg:w-[320px] lg:h-[603.35px]">

              <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099994/homapage-hero_x7wfqe.png" 
              class="box1r-img1 pt-[70px] xl:w-[540px] xl:h-[662.05px] lg:w-[400.6px] lg:h-[470.46px]" alt="girl"></img>

              <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099993/homapage-hero-widget-1_uvokwd.png" alt="people"
              class="box1r-img2 absolute xl:w-[300px] xl:h-[177.6px] lg:w-[175px] lg:h-[108.4px] xl:top-[12%] xl:left-[49%] lg:top-[19%] lg:left-[50%]"></img>

              <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099993/homapage-hero-widget-2_kqoizz.png" alt="donation"
              class="box1r-img3 absolute xl:w-[400px] xl:h-[179.2px] lg:w-[225px] lg:h-[113.35px] xl:top-[72%] xl:left-[32%] lg:top-[81%] lg:left-[35%]"></img>

              <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099993/homapage-hero-widget-3_gasgjr.png" alt="hand"
              class="box1r-img4 absolute xl:w-[180px] xl:h-[173.88px] lg:w-[120px] lg:h-[115.9px] xl:top-[25%] xl:left-[-7%] lg:top-[27%] lg:left-[-7%]"></img>

          </div>
        </div>
    </>
  );
}




