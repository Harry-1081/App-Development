import {MdPeople} from 'react-icons/md';
import {FaBoxOpen,FaDonate} from 'react-icons/fa';
import { useEffect } from 'react';
function Home() {
    
    useEffect(() => {
        const counters = document.querySelectorAll('.box7-value');
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
        {/* Div 1 */}

        <div class='box1-main flex justify-evenly lg:flex-col h-[800px] bg-blue-200 items-center'>

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

        {/* Div 4 */}
            <div class="box4 relative lg:flex-col justify-evenly items-center text-center h-[122.34px] mt-[40px]">
                <p class="box4-head text-6xl"><b>Our Features</b></p>
                <p class="box4-subhead xl:text-[1.8rem] lg:text-[0.8rem]">We believe that we can save more life with you.<br/></p>
            </div>

                <div class='flex relative lg:flex-col justify-evenly xl:h-[565.14px] lg:h-[1200.55px] items-center pl-[100px] pr-[100px]'>
                    <div class='box4-f1 xl:w-[350px] lg:w-[320px] h-[369.5px] bg-pink-100 p-4 text-center'>
                        <button class='box4-f1-icon text-8xl mt-[30px] mb-[20px] p-[20px] bg-[#396c61] text-white rounded-[100px]'><MdPeople/></button>
                        <span class="box4-f1-head text-2xl"><b><br/>Become volunteer<br/></b></span>
                        <span class="box4-f1-subhead">Beoame a volunteer if you are<br/>motivated & ready to support people<br/>and the community.<br/></span>
                    </div>

                    <div class='box4-f2 xl:w-[350px] lg:w-[320px] h-[369.5px] bg-pink-100 p-4 text-center'>
                        <button class='box4-f2-icon text-8xl mt-[30px] mb-[20px] p-[20px] bg-[#396c61] text-white rounded-[100px]'><FaBoxOpen/></button>
                        <span class="box4-f2-head text-2xl"><b><br/>Quick Fundraise<br/></b></span>
                        <span class="box4-f2-subhead">The simplest and quickest way to<br/>make a donation, so you can support<br/>people in need.<br/></span>
                    </div>

                    <div class='box4-f3 xl:w-[350px] lg:w-[320px] h-[369.5px] bg-pink-100 p-4 text-center'>
                        <button class='box4-f3-icon text-8xl mt-[30px] mb-[20px] p-[20px] bg-[#396c61] text-white rounded-[100px]'><FaDonate/></button>
                        <span class="box4-f3-head text-2xl"><b><br/>Start a Donation<br/></b></span>
                        <span class="box4-f3-subhead">Start donating for our campaigns to<br/>support poor people and our<br/>children’s to school.<br/></span>
                    </div>
                </div>

        {/* Div 7 */}
            <div class="box7 relative flex items-center justify-evenly lg:flex-col h-[331px] bg-[#396c61]">

                <div class='counter w-[340px] xl:h-[91px] lg:h-[144px] text-center'>
                    <span data-target="20000" class="box7-value text-6xl text-white font-bold">0</span>
                    <span class="box7-f1-head xl:text-2xl lg:1xl text-white"><br/>Signatures every hours<br/></span>
                </div>

                <div class='counter w-[340px] xl:h-[91px] lg:h-[144px] text-center'>
                    <span data-target="50000" class="box7-value text-6xl text-white font-bold">0</span>
                    <span class="box7-f2-head xl:text-2xl lg:1xl text-white"><br/>Victory each month<br/></span>
                </div>

                <div class='counter w-[340px] xl:h-[91px] lg:h-[144px] text-center'>
                    <span data-target="1000000" class="box7-value text-6xl text-white font-bold">0</span>
                    <span class="box7-f3-head xl:text-2xl lg:1xl text-white"><br/>Fundraised per year<br/></span>
                </div>
                
            </div>
        </>
    );
}

export default Home;