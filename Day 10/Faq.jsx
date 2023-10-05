import Footer from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
function Faq() {
   
    return(
        <>
        <Navbar/>
        <div className="bg-blue-50">

        {/* Division 1 */}
            <div className="flex xl:justify-evenly lg:flex-col xl:h-[620px] items-center">

                <div className="lg:pt-[20px] lg:h-[220px] lg:mt-[20px]">
                    <p className="xl:text-6xl lg:text-2xl xl:pb-[30px] lg:pb-[10px] font-bold">The answer for<br/>your questions</p>
                    <p className="xl:text-2xl lg:hidden xl:pb-[10px] text-[#464343] font-inclusiveSans">Here is a collection of frequently asked<br/>questions from the users.</p>
                    <p className="xl:hidden lg:text-[1rem] xl:pb-[10px] text-[#464343] font-inclusiveSans">Here is a collection of frequently<br/>asked questions from the users.</p>
                    <button className="bg-[#396c61] xl:mt-[25px] text-white font-semibold text-1xl w-[152px] xl:h-[46px] rounded-[10px]
                    lg:h-[40px] lg:mt-[15px]">Ask a question {'>'}</button>
                </div>

                <div className="lg:h-[240px] lg:pt-[20px]">
                    <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695621608/faq_bdlubn.png"
                     alt="faq" className="xl:w-[600px] xl:h-[400px] lg:w-[260px] lg:h-[166px]"></img>
                </div>

            </div>

        
        {/* Division 2 */}
            <div className="bg-[#396c61] text-center xl:h-[200px] lg:h-[420px]">
                    <p className="text-white pt-[3%] text-5xl font-poppins font-bold">Frequenty Asked Questions</p>
                <div className="flex justify-center">
                    <div className="xl:flex pt-[3%] lg:w-[100%] w-[85%] text-[#396c61] lg:flex-col xl:justify-evenly items-center h-[60px]">
                        <p className="bg-white lg:border-2  pr-5 pl-5 pt-1 pb-1 font-inclusiveSans font-semibold">All</p>
                        <p className="bg-white lg:border-2  pr-5 pl-5 pt-1 pb-1 font-inclusiveSans font-semibold">Valid campaigns</p>
                        <p className="bg-white lg:border-2  pr-5 pl-5 pt-1 pb-1 font-inclusiveSans font-semibold">Creating campaigns</p>
                        <p className="bg-white lg:border-2  pr-5 pl-5 pt-1 pb-1 font-inclusiveSans font-semibold">Forgot Password</p>
                        <p className="bg-white lg:border-2  pr-5 pl-5 pt-1 pb-1 font-inclusiveSans font-semibold">Volunteer events</p>
                        <p className="bg-white lg:border-2  pr-5 pl-5 pt-1 pb-1 font-inclusiveSans font-semibold">Shop</p>
                        <p className="bg-white lg:border-2  pr-5 pl-5 pt-1 pb-1 font-inclusiveSans font-semibold">write blog</p>
                        <p className="bg-white lg:border-2  pr-5 pl-5 pt-1 pb-1 font-inclusiveSans font-semibold">contacting donors</p>
                    </div>
                </div>
            </div>

        {/* Division 3 */}
            <div className="flex-col gap-y-[20px]">

                <div className="flex justify-center">
                    <div className="xl:w-[85%] p-[30px] hover:w-[100%] pt-[40px] xl:hover:pl-[120px] xl:hover:bg-[#396c61]
                    transition-all duration-[1s] xl:hover:text-white">
                        <p className="xl:text-4xl lg:text-2xl font-semibold pb-[10px]">1. How does this fundraising platform work?</p>
                        <p className="xl:text-[1.1rem] lg:text-xl font-inclusiveSans">Our platform connects passionate individuals and organizations with impactful causes. 
                        Fundraisers can create campaigns, share their<br/>stories, and collect donations. Donors can 
                        browse campaigns, contribute, and track the impact of their support for the cause.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="xl:w-[85%] p-[30px] hover:w-[100%] xl:hover:pl-[120px] xl:hover:bg-[#396c61]
                    transition-all duration-[1s] xl:hover:text-white">
                        <p className="xl:text-4xl lg:text-2xl font-semibold pb-[10px]">2. Is it safe to make donations on this website?</p>
                        <p className="xl:text-[1.1rem] lg:text-xl font-inclusiveSans">Yes, your security is our priority. We use industry-standard encryption to 
                        protect your personal and financial information. Our payment partners<br/>ensure secure transactions, and your data is never  
                        shared without your consent.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="xl:w-[85%] p-[30px] hover:w-[100%] xl:hover:pl-[120px] xl:hover:bg-[#396c61]
                    transition-all duration-[1s] xl:hover:text-white">
                        <p className="xl:text-4xl lg:text-2xl font-semibold pb-[10px]">3. How can I start a fundraising campaign?</p>
                        <p className="xl:text-[1.1rem] lg:text-xl font-inclusiveSans">It's easy! Click the "Start a Campaign" button, follow the steps to set 
                        your campaign goal, tell your story, and share it with your network.<br/>You'll be up and running in no time.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="xl:w-[85%] p-[30px] pb-[40px] hover:w-[100%] xl:hover:pl-[120px] xl:hover:bg-[#396c61]
                    transition-all duration-[1s] xl:hover:text-white">
                        <p className="xl:text-4xl lg:text-2xl font-semibold pb-[10px]">2. Is it safe to make donations on this website?</p>
                        <p className="xl:text-[1.1rem] lg:text-xl font-inclusiveSans">Yes, your security is our priority. We use industry-standard encryption to 
                        protect your personal and financial information. Our payment partners<br/>ensure secure transactions, and your data is never  
                        shared without your consent.</p>
                    </div>
                </div>

                
            </div>

        </div>
        <Footer/>
        </>
    );
}
export default Faq;
