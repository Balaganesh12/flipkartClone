import { useEffect } from "react";
import "./App.css";
import useProductCategory from "./useProductCategory";
import useLabtopProduct from "./useLabtopProduct";
import useSmartPhoneProduct from "./useSmartPhoneProduct";
import useSportsProduct from "./useSportsCategory";
import useBeautyProduct from "./useBeauty";
import useGroceries from "./useGroceries";
import useHomeStyle from "./useHomeStyle";
import useShoes from "./useShoes";
import useFurniture from "./useBeauty copy";
const logo =
  "https://ik.imagekit.io/s7ag3dh8w/MernStack/Flipkart_Clone/fkheaderlogo_exploreplus-44005d.svg";
const profileLogo =
  "https://ik.imagekit.io/s7ag3dh8w/MernStack/Flipkart_Clone/profile-52e0dc.svg";
const headerbar =
  "https://ik.imagekit.io/s7ag3dh8w/MernStack/Flipkart_Clone/header_3verticalDots-ea7819.svg";
const seller =
  "https://ik.imagekit.io/s7ag3dh8w/MernStack/Flipkart_Clone/Store-seller.svg?updatedAt=1748069248771";
const shop =
  "https://ik.imagekit.io/s7ag3dh8w/MernStack/Flipkart_Clone/header_shop.svg?updatedAt=1748069248873";
const bannerOne =
  "https://ik.imagekit.io/s7ag3dh8w/MernStack/Flipkart_Clone/flipkart-banner3.webp?updatedAt=1748068696189";
const bannerTwo =
  "https://ik.imagekit.io/s7ag3dh8w/MernStack/Flipkart_Clone/flipkard-banner2.jpg?updatedAt=1748068695903";
const bannerThree =
  "https://ik.imagekit.io/s7ag3dh8w/MernStack/Flipkart_Clone/flipkart-banner1.jpeg?updatedAt=1748068695918";
const adverticement =
  "https://ik.imagekit.io/s7ag3dh8w/MernStack/Flipkart_Clone/adverticement.webp?updatedAt=1748070324897";
function App() {
  const { categories} = useProductCategory();
  const { labtops} = useLabtopProduct();
  const { smartPhone} =
    useSmartPhoneProduct();
  const { sports} = useSportsProduct();
  const {beauty}=useBeautyProduct();
  const {groceries}=useGroceries();
  const {homeStyle}=useHomeStyle();
  const {shoes}=useShoes();
  const {furniture}=useFurniture()
  return (
    <>
      <header className="mx-auto  bg-white fixed z-[999] w-full top-0">
        <div className="w-[98%] mx-auto  h-[67px] grid grid-cols-12 lg:grid-cols-7">
          <div className="lg:col-span-4 col-span-10 flex justify-between items-center">
            <img className="mr-[36px]" src={logo} />
            <div className="w-[100%] bg-[#f0f5ff] h-[40px] rounded-[8px] overflow-hidden  flex items-center">
              <div className="py-[8px] pl-[12px] pr-[8px]">
                <svg
                  width="24"
                  height="24"
                  class=""
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Search Icon</title>
                  <path
                    d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                    stroke="#717478"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 16L21 21"
                    stroke="#717478"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-[100%] bg-[#f0f5ff] h-[40px] outline-none"
                placeholder="Search for Products, Brands and More"
              />
            </div>
          </div>
          <div className="lg:col-span-3 col-span-2 flex lg:justify-around justify-end items-center">
            <button className="lg:flex items-center gap-[8px] hidden">
              <img
                src={profileLogo}
                alt="profileLogo"
                className="w-[24px] h-[24px]"
              />
              Login
            </button>
            <button className="lg:flex items-center gap-[8px] hidden">
              <img src={shop} alt="shop" className="w-[24px] h-[24px]" />
              Cart
            </button>
            <button className="lg:flex items-center gap-[8px] hidden">
              <img src={seller} alt="seller" className="w-[24px] h-[24px]" />
              Become a Seller
            </button>
            <button>
              <img
                className="w-[24px] h-[24px]"
                src={headerbar}
                alt="headerbar"
              />
            </button>
          </div>
        </div>
      </header>

      <section className="2xl:container mt-[75px] mx-auto">
        <div className="w-[98%] mx-auto  bg-white flex items-center justify-around overflow-auto custom-scrollbar gap-[20px] p-[16px]">
          {categories.slice(5).map((cat) => (
            <div className="flex flex-col justify-center items-center gap-[12px] max-w-[100px] text-center">
              <div className="category-bg w-[55px] h-[55px] rounded-md transform transition-all duration-300 ease-in-out hover:scale-[1.03] cursor-pointer">
                <img className="w-[100%] h-[100%]" src={cat.thumbnail} />
              </div>
              <h1>{cat.category}</h1>
            </div>
          ))}
        </div>
      </section>

      <section className="2xl:container my-[16px] mx-auto">
        <div className="w-[98%] mx-auto">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={bannerOne} />
              </div>
              <div className="carousel-item">
                <img src={bannerTwo} />
              </div>
              <div className="carousel-item">
                <img src={bannerThree} />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="2xl:container my-[16px] mx-auto">
        <div className="w-[98%] mx-auto   flex items-center min-h-[126px]  justify-between">
          <div className="p-[16px] bg-white min-h-[289px] w-full overflow-auto custom-scrollbar">
            <h1 className="text-[22px] leading-[30px]  not-italic font-semibold">
              Best Deals On Labtops
            </h1>
            <div className="flex gap-[10px]">
              {labtops.map((lap) => (
                <div className="flex flex-col items-center w-[152px]">
                  <div className="w-[152px] h-[152px] transform transition-all duration-300 ease-in-out hover:scale-[1.03] cursor-pointer">
                    <img
                      src={lap.thumbnail}
                      alt="category"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <p class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center font-normal leading-5 text-sm not-italic text-[#727272] font-[Inter] px-[10px]">
                    {lap.title}
                  </p>
                  <h2 class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center  leading-5 text-sm not-italic text-[#232323] font-semibold font-[Inter] px-[10px]">
                    {lap.price}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[188px] ml-[16px]">
            <img
              src={adverticement}
              width="100%"
              height="100%"
              alt="adverticement"
            />
          </div>
        </div>
      </section>

      <section className="2xl:container my-[16px] mx-auto">
        <div className="w-[98%] mx-auto  bg-white  flex items-center min-h-[126px] overflow-auto  custom-scrollbar">
          <div className="p-[16px]">
            <h1 className="text-[22px] leading-[30px]  not-italic font-semibold">
            Beauty, Food, Toys & more
            </h1>
            <div className="flex gap-[10px]">
              {groceries.map((lap) => (
                <div className="flex flex-col items-center w-[152px]">
                  <div className="w-[152px] h-[152px] transform transition-all duration-300 ease-in-out hover:scale-[1.03] cursor-pointer">
                    <img
                      src={lap.thumbnail}
                      alt="category"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <p class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center font-normal leading-5 text-sm not-italic text-[#727272] font-[Inter] px-[10px]">
                    {lap.title}
                  </p>
                  <h2 class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center  leading-5 text-sm not-italic text-[#232323] font-semibold font-[Inter] px-[10px]">
                    {lap.price}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="2xl:container my-[16px] mx-auto">
        <div className="w-[98%] mx-auto gap-[12px] grid md:grid-cols-3">
          <div className="bg-white">
            <div className="flex justify-between items-center p-[16px]">
              <h1 className="text-[22px] leading-[30px]  not-italic font-semibold">
              Summer Beauty and Wellness
              </h1>
              <div className="bg-[#2a55e5] cursor-pointer w-[24px] h-[24px] rounded-[50%]">
                {" "}
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 17 17"
                  style={{ margin: "4px" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.627 3.749l5 5-5 5"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[12px] px-[16px] pb-[16px]">
              {beauty.slice(0,4).map((data)=>
                  <div className="p-[12px] rounded-[4px] border border-[#ebebeb]">
                  <div className="max-w-[151px] cursor-pointer max-h-[151px] transform transition-all duration-300 ease-in-out hover:scale-[1.03] mx-auto">
                    <img
                      className="mx-auto"
                      src={data.thumbnail}
                      alt="image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-[17px] leading-[24px] tracking-[-0.01px] text-[#1f1f1f] pt-[16px] not-italic font-semibold">
                    {data.title}
                  </h1>
                  <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-[17px] leading-[24px] text-[#108934] not-italic font-semibold">
                    {data.brand}
                  </h1>
                </div>
                )}
            </div>
          </div>
          <div className="bg-white">
            <div className="flex justify-between items-center p-[16px]">
              <h1 className="text-[22px] leading-[30px]  not-italic font-semibold">
              Home Decor & Furnishings
              </h1>
              <div className="bg-[#2a55e5] cursor-pointer w-[24px] h-[24px] rounded-[50%]">
                {" "}
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 17 17"
                  style={{ margin: "4px" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.627 3.749l5 5-5 5"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[12px] px-[16px] pb-[16px]">
              {homeStyle.slice(0,4).map((data)=>
                  <div className="p-[12px] rounded-[4px] border border-[#ebebeb]">
                  <div className="max-w-[151px] cursor-pointer max-h-[151px] transform transition-all duration-300 ease-in-out hover:scale-[1.03] mx-auto">
                    <img
                      className="mx-auto"
                      src={data.thumbnail}
                      alt="image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-[17px] leading-[24px] tracking-[-0.01px] text-[#1f1f1f] pt-[16px] not-italic font-semibold">
                    {data.title}
                  </h1>
                  <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-[17px] leading-[24px] text-[#108934] not-italic font-semibold">
                    {data.warrantyInformation}
                  </h1>
                </div>
                )}
            </div>
          </div>
          <div className="bg-white">
            <div className="flex justify-between items-center p-[16px]">
              <h1 className="text-[22px] leading-[30px]  not-italic font-semibold">
              Furniture Deals
              </h1>
              <div className="bg-[#2a55e5] cursor-pointer w-[24px] h-[24px] rounded-[50%]">
                {" "}
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 17 17"
                  style={{ margin: "4px" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.627 3.749l5 5-5 5"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[12px] px-[16px] pb-[16px]">
              {furniture.slice(0,4).map((data)=>
                  <div className="p-[12px] rounded-[4px] border border-[#ebebeb]">
                  <div className="max-w-[151px] cursor-pointer max-h-[151px] transform transition-all duration-300 ease-in-out hover:scale-[1.03] mx-auto">
                    <img
                      className="mx-auto"
                      src={data.thumbnail}
                      alt="image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-[17px] leading-[24px] tracking-[-0.01px] text-[#1f1f1f] pt-[16px] not-italic font-semibold">
                    {data.title}
                  </h1>
                  <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-[17px] leading-[24px] text-[#108934] not-italic font-semibold">
                    {data.brand}
                  </h1>
                </div>
                )}
            </div>
          </div>
        </div>
      </section>
      <section className="2xl:container my-[16px] mx-auto">
        <div className="w-[98%] mx-auto  bg-white  flex items-center min-h-[126px] overflow-auto custom-scrollbar">
          <div className="p-[16px]">
            <h1 className="text-[22px] leading-[30px]  not-italic font-semibold">
            Fashion Top Deals
            </h1>
            <div className="flex gap-[10px]">
              {shoes.map((mob) => (
                <div className="flex flex-col items-center w-[152px]">
                  <div className="w-[152px] h-[152px] transform transition-all duration-300 ease-in-out hover:scale-[1.03] cursor-pointer">
                    <img
                      src={mob.thumbnail}
                      alt="category"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <p class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center font-normal leading-5 text-sm not-italic text-[#727272] font-[Inter] px-[10px]">
                    {mob.title}
                  </p>
                  <h2 class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center  leading-5 text-sm not-italic text-[#232323] font-semibold font-[Inter] px-[10px]">
                    {mob.price}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="2xl:container my-[16px] mx-auto">
        <div className="w-[98%] mx-auto  bg-white  flex items-center min-h-[126px] overflow-auto custom-scrollbar">
          <div className="p-[16px]">
            <h1 className="text-[22px] leading-[30px]  not-italic font-semibold">
              Best Deals On Mobile
            </h1>
            <div className="flex gap-[10px]">
              {smartPhone.map((mob) => (
                <div className="flex flex-col items-center w-[152px]">
                  <div className="w-[152px] h-[152px] transform transition-all duration-300 ease-in-out hover:scale-[1.03] cursor-pointer">
                    <img
                      src={mob.thumbnail}
                      alt="category"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <p class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center font-normal leading-5 text-sm not-italic text-[#727272] font-[Inter] px-[10px]">
                    {mob.title}
                  </p>
                  <h2 class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center  leading-5 text-sm not-italic text-[#232323] font-semibold font-[Inter] px-[10px]">
                    {mob.price}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="2xl:container my-[16px] mx-auto">
        <div className="w-[98%] mx-auto  bg-white  flex items-center min-h-[126px] overflow-auto custom-scrollbar">
          <div className="p-[16px]">
            <h1 className="text-[22px] leading-[30px]  not-italic font-semibold">
            Sports, Healthcare & more
            </h1>
            <div className="flex gap-[10px]">
              {sports.map((sp) => (
                <div className="flex flex-col items-center w-[152px]">
                  <div className="w-[152px] h-[152px] transform transition-all duration-300 ease-in-out hover:scale-[1.03] cursor-pointer">
                    <img
                      src={sp.thumbnail}
                      alt="category"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <p class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center font-normal leading-5 text-sm not-italic text-[#727272] font-[Inter] px-[10px]">
                    {sp.title}
                  </p>
                  <h2 class="w-[152px] whitespace-nowrap overflow-hidden text-ellipsis text-center  leading-5 text-sm not-italic text-[#232323] font-semibold font-[Inter] px-[10px]">
                    {sp.price}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto p-[30px] text-[#878787] bg-[#f5f5f5] w-full ">
        <div>
          <h1 className="text-[18px] font-bold">
            Flipkart: The One-stop Shopping Destination
          </h1>
          E-commerce is revolutionizing the way we all shop in India. Why do you
          want to hop from one store to another in search of the latest phone
          when you can find it on the Internet in a single click? Not only
          mobiles. Flipkart houses everything you can possibly imagine, from
          trending electronics like laptops, tablets, smartphones, and mobile
          accessories to in-vogue fashion staples like shoes, clothing and
          lifestyle accessories; from modern furniture like sofa sets, dining
          tables, and wardrobes to appliances that make your life easy like
          washing machines, TVs, ACs, mixer grinder juicers and other
          time-saving kitchen and small appliances; from home furnishings like
          cushion covers, mattresses and bedsheets to toys and musical
          instruments, we got them all covered. You name it, and you can stay
          assured about finding them all here. For those of you with erratic
          working hours, Flipkart is your best bet. Shop in your PJs, at night
          or in the wee hours of the morning. This e-commerce never shuts down.{" "}
          <br />
          <br />
          What's more, with our year-round shopping festivals and events, our
          prices are irresistible. We're sure you'll find yourself picking up
          more than what you had in mind. If you are wondering why you should
          shop from Flipkart when there are multiple options available to you,
          well, the below will answer your question. <br />
          <br />
          <h2 className="text-[18px] font-bold">Flipkart Plus</h2>A world of
          limitless possibilities awaits you - Flipkart Plus was kickstarted as
          a loyalty reward programme for all its regular customers at zero
          subscription fee. All you need is 500 supercoins to be a part of this
          service. For every 100 rupees spent on Flipkart order, Plus members
          earns 4 supercoins &amp; non-plus members earn 2 supercoins. Free
          delivery, early access during sales and shopping festivals, exchange
          offers and priority customer service are the top benefits to a
          Flipkart Plus member. In short, earn more when you shop more! <br />
          <br />
          What's more, you can even use the Flipkart supercoins for a number of
          exciting services, like:
          <br />
          An annual Zomato Gold membership
          <br />
          An annual Hotstar Premium membership
          <br />6 months Gaana plus subscription
          <br />
          Rupees 550 instant discount on flights on ixigo
          <br />
          Check out https://www.flipkart.com/plus/all-offers for the entire
          list. Terms and conditions apply.
          <br />
          <br />
          <h2 className="text-[18px] font-bold">No Cost EMI</h2>In an attempt to
          make high-end products accessible to all, our No Cost EMI plan enables
          you to shop with us under EMI, without shelling out any processing
          fee. Applicable on select mobiles, laptops, large and small
          appliances, furniture, electronics and watches, you can now shop
          without burning a hole in your pocket. If you've been eyeing a product
          for a long time, chances are it may be up for a no cost EMI. Take a
          look ASAP! Terms and conditions apply.
          <br />
          <br /> <h2 className="text-[18px] font-bold">EMI on Debit Cards</h2>
          Did you know debit card holders account for 79.38 crore in the
          country, while there are only 3.14 crore credit card holders? After
          enabling EMI on Credit Cards, in another attempt to make online
          shopping accessible to everyone, Flipkart introduces EMI on Debit
          Cards, empowering you to shop confidently with us without having to
          worry about pauses in monthly cash flow. At present, we have partnered
          with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this
          facility. More power to all our shoppers! Terms and conditions apply.{" "}
          <br />
          <br />
          <h2 className="text-[18px] font-bold">Mobile Exchange Offers</h2>Get
          an instant discount on the phone that you have been eyeing on.
          Exchange your old mobile for a new one after the Flipkart experts
          calculate the value of your old phone, provided it is in a working
          condition without damage to the screen. If a phone is applicable for
          an exchange offer, you will see the 'Buy with Exchange' option on the
          product description of the phone. So, be smart, always opt for an
          exchange wherever possible. Terms and conditions apply. <br />
          <br />
          <h2 className="text-[18px] font-bold">
            What Can You Buy From Flipkart?
          </h2>
          <h2 className="text-[18px] font-bold">Mobile Phones</h2>From budget
          phones to state-of-the-art smartphones, we have a mobile for everybody
          out there. Whether you're looking for larger, fuller screens,
          power-packed batteries, blazing-fast processors, beautification apps,
          high-tech selfie cameras or just large internal space, we take care of
          all the essentials. Shop from top brands in the country like Samsung,
          Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest
          assured, you're buying from only the most reliable names in the
          market. What's more, with Flipkart's Complete Mobile Protection Plan,
          you will never again find the need to run around service centres. This
          plan entails you to a number of post-purchase solutions, starting at
          as low as Rupees 99 only! Broken screens, liquid damage to phone,
          hardware and software glitches, and replacements -{" "}
          <b>the Flipkart Complete Mobile Protection</b> covers a comprehensive
          range of post-purchase problems, with door-to-door services. <br />
          <br />
          <h2 className="text-[18px] font-bold">
            Electronic Devices and Accessories
          </h2>
          When it comes to laptops, we are not far behind. Filter among dozens
          of super-fast operating systems, hard disk capacity, RAM, lifestyle,
          screen size and many other criterias for personalized results in a
          flash. All you students out there, confused about what laptop to get?
          Our <b>Back To College Store</b> segregates laptops purpose wise
          (gaming, browsing and research, project work, entertainment, design,
          multitasking) with recommendations from top brands and industry
          experts, facilitating a shopping experience that is quicker and
          simpler.
          <br />
          <br />
          Photography lovers, you couldn't land at a better page than ours.
          Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras,
          millennial favourite instant cameras or action cameras for adventure
          junkies: our range of cameras is as much for beginners as it is for
          professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big
          names you'll find in our store. Photography lovers, you couldn't land
          at a better page than ours. Cutting-edge DSLR cameras, ever reliable
          point-and-shoot cameras, millennial favourite instant cameras or
          action cameras for adventure junkies: our range of cameras is as much
          for beginners as it is for professionals. Canon, Nikon, GoPro, Sony,
          and Fujifilm are some big names you'll find in our store. <br />
          <br />
          Turn your home into a theatre with a stunning surround sound system.
          Choose from our elaborate range of Sony home theatres, JBL soundbars
          and Philips tower speakers for an experience to remember.
          <br />
          <br />
          How about jazzing up your phone with our quirky designer cases and
          covers? Our wide-ranging mobile accessories starting from headphones,
          power banks, memory cards, mobile chargers, to selfie sticks can prove
          to be ideal travel companions for you and your phone; never again
          worry about running out of charge or memory on your next vacation.
          <br />
          <br />
          <h2 className="text-[18px] font-bold">Large Appliances</h2>Sleek TVs,
          power-saving refrigerators, rapid-cooling ACs, resourceful washing
          machines - discover everything you need to run a house under one roof.
          Our <b>Dependable TV and Appliance Store</b> ensures zero transit
          damage, with a replacement guarantee if anything goes wrong; delivery
          and installation as per your convenience and a double warranty
          (Official Brand Warranty along with an extended Flipkart Warranty) -
          rest assured, value for money is what is promised and delivered. Shop
          from market leaders in the country like Samsung, LG, Whirlpool, Midea,
          Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi among many
          others.
          <br />
          <br />
          For certain product categories, Customers meeting the eligibility
          criteria will have the option to buy larger quantities. To know more
          on the eligibility criteria and terms and conditions, please reach out
          to{" "}
          <a href="mailto:Purchases.oni@flipkart.com">
            Purchases.oni@flipkart.com
          </a>
          . <br />
          <br />
          <h2 className="text-[18px] font-bold">Small Home Appliances</h2>Find
          handy and practical home appliances designed to make your life
          simpler: electric kettles, OTGs, microwave ovens, sandwich makers,
          hand blenders, coffee makers, and many more other time-saving
          appliances that are truly crafted for a quicker lifestyle. Live life
          king size with these appliances at home.
          <br />
          <br />
          <h2 className="text-[18px] font-bold">Lifestyle</h2>Flipkart,{" "}
          <b>'India ka Fashion Capital'</b>, is your one-stop fashion
          destination for anything and everything you need to look good. Our
          exhaustive range of Western and Indian wear, summer and winter
          clothing, formal and casual footwear, bridal and artificial jewellery,
          long-lasting make-up, grooming tools and accessories are sure to sweep
          you off your feet. Shop from crowd favourites like Vero Moda, Forever
          21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among
          dozens of other top-of-the-ladder names. From summer staple maxi
          dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to
          street-smart biker jackets, you can rely on us for a wardrobe that is
          up to date. Explore our in-house brands like Metronaut, Anmi, and
          Denizen, to name a few, for carefully curated designs that are the
          talk of the town. Get ready to be spoiled for choice.Festivals, office
          get-togethers, weddings, brunches, or nightwear - Flipkart will have
          your back each time.
          <br />
          <br />
          <h2 className="text-[18px] font-bold">Home and Furniture</h2>Moving to
          a new place is never easy, especially if you're buying new furniture.
          Beds, sofa sets, dining tables, wardrobes, and TV units - it's not
          easy to set up everything again. With the hundreds of options thrown
          at you, the ride could be overwhelming. What place is reliable, what
          furniture will stand the test of time? These are questions you must
          ask before you choose a store. Well, our{" "}
          <b>Durability Certified Furniture Store</b> has not only curated a
          range of furniture keeping in mind the modern Indian consumer but
          furniture that comes with a lab certification, ensuring they last you
          for up to 10 years. Yes, all our furniture has gone through 35
          stability and load tests so that you receive only the best-quality
          furniture. <b>Be FurniSure</b>, always. Names to look out for are
          Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect
          Homes. <br />
          <br />
          You may have your furniture all set up, but they could end up looking
          flat and incomplete without complementary decor. Curtains, cushion
          covers, bed sheets, wall shelves, paintings, floor lamps - find
          everything that turns a house to an inviting home under one roof at
          Flipkart. <br />
          <br />
          <h2 className="text-[18px] font-bold">Baby and Kids</h2>Your kids
          deserve only the best. From bodysuits, booties, diapers to strollers,
          if you're an expecting mother or a new mother, you will find
          everything you need to set sail on a smooth parenting journey with the
          help of our baby care collection. When it comes to safety, hygiene and
          comfort, you can rely on us without a second thought. Huggies,
          Pampers, MamyPoko, and Johnson &amp; Johnson: we host only the
          most-trusted names in the business for your baby.
          <br />
          <br />
          <h2 className="text-[18px] font-bold">Books, Sports and Games</h2>Work
          hard and no play? We don't believe in that. Get access to best-selling
          fiction and non-fiction books by your favourite authors, thrilling
          English and Indian blockbusters, most-wanted gaming consoles, and a
          tempting range of fitness and sports gadgets and equipment bound to
          inspire you to get moving. <br />
          <br />
          <h2 className="text-[18px] font-bold">Grocery/Supermart</h2>Launching
          into the grocery vertical, Flipkart introduces <b>Supermart</b> that
          is out to bring everyday essentials close to you. From pulses, spices,
          dairy, personal and sanitary care, breakfast essentials, health
          drinks, spreads, ready to cook, grooming to cleaning agents, we are
          happy to present everything you need to run a house. Now buy Grocery
          products for as low as 1 Rupee only - our <b>1 Rupee Store</b>{" "}
          presents new products every day for a nominal price of 1 Rupee only.
          Terms and conditions apply.
        </div>
      </section>

      <footer className="mx-auto hidden md:block bg-[#212121] w-full ">
        <div className="pt-[40px] px-[60px] pb-0 grid grid-cols-8 gap-[20px]">
          <div className="col-span-1">
            <h5 className="text-[#878787] text-sm mb-3">ABOUT</h5>
            <ul>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Contact Us
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                About Us
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Careers
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Flipkart Stories
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Press
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Corporate
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Information
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-[#878787] text-sm mb-3">GROUP COMPANIES</h5>
            <ul>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Myntra
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Cleartrip
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Shopsy
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-[#878787] text-sm mb-3">HELP</h5>
            <ul>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Payments
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Shipping
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Cancellation & Returns
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                FAQ
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-[#878787] text-sm mb-3">CONSUMER POLICY</h5>
            <ul>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Cancellation & Returns
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Terms Of Use
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Security
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Privacy
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Sitemap
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                Grievance Redressal
              </li>
              <li className="text-[13px] text-white block leading-[18px] hover:underline font-bold">
                EPR Compliance
              </li>
            </ul>
          </div>
          <div className="col-span-2 border-l border-l-[#454d5e] pl-[32px]">
            <h5 className="text-[#878787] text-sm mb-3">Mail Us:</h5>
            <ul>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                Flipkart Internet Private Limited,{" "}
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                Buildings Alyssa, Begonia &{" "}
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                Clove Embassy Tech Village,{" "}
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                {" "}
                Outer Ring Road, Devarabeesanahalli Village,{" "}
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                {" "}
                Bengaluru, 560103,{" "}
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                {" "}
                Karnataka, India
              </li>
            </ul>
            <h5 className="text-[#878787] text-sm mb-3 mt-3">Social:</h5>
          </div>
          <div className="col-span-2">
            <h5 className="text-[#878787] text-sm mb-3">
              Registered Office Address:
            </h5>
            <ul>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                Flipkart Internet Private Limited,{" "}
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                {" "}
                Buildings Alyssa, Begonia &{" "}
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                {" "}
                Clove Embassy Tech Village,{" "}
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                {" "}
                Outer Ring Road, Devarabeesanahalli Village,{" "}
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                {" "}
                Bengaluru, 560103,
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                {" "}
                Karnataka, India
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                CIN : U51109KA2012PTC066107
              </li>
              <li className="text-[13px] text-white block leading-[18px] font-bold">
                {" "}
                Telephone:{" "}
                <a className="text-[#2874f0]" href="tel:044-45614700">
                  044-45614700
                </a>{" "}
                /
                <a href="tel:044-67415800" className="text-[#2874f0]">
                  044-67415800
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
