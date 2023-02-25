import React, { useRef, useState } from "react";

// send emai
import emailjs from "@emailjs/browser";

//? import data
import { propertyData } from "../data";
// ?import params and link
import { useParams, Link } from "react-router-dom";

//? import icon
import { BiArea } from "react-icons/bi";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";

const PropertyDetails = () => {
  // mengambil id dari file data
  const { id } = useParams();
  // meribah id dari sting ke int
  const productId = propertyData.find((product) => {
    return product.id === parseInt(id);
  });

  //! send email

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let name = document.getElementById("name");
    let Email = document.getElementById("email");
    let Phone = document.getElementById("phone");
    let Message = document.getElementById("message");
    const success = document.getElementById("yes");
    const gagal = document.getElementById("no");

    if (
      name.value !== "" &&
      Email.value !== "" &&
      Phone.value !== "" &&
      Message.value !== ""
    ) {
      emailjs.sendForm(
        "service_w6bvohu",
        "template_ncxcvgl",
        form.current,
        "1Be5MylsxJQMTYEdC"
      );
      success.style.display = "block";
    } else {
      gagal.style.display = "block";
    }
    setTimeout(() => {
      return (
        (name.value = ""),
        (Email.value = ""),
        (Phone.value = ""),
        (Message.value = ""),
        (success.style.display = "none"),
        (gagal.style.display = "none")
      );
    }, 5000);
  };

  // setting nego
  const [diskon] = useState(false);
  function nego1() {
    const coret = document.getElementById("coret");
    const newharga1 = document.getElementById("hargabaru1");
    const newharga2 = document.getElementById("hargabaru2");
    const newharga3 = document.getElementById("hargabaru3");
    const nodi = document.getElementById("nodiskon");
    if (diskon !== productId.statusnego) {
      coret.style.textDecoration = "line-through";
      newharga1.style.display = "block";
      newharga2.style.display = "none";
      newharga3.style.display = "none";
    } else {
      nodi.style.display = "block";
    }
  }

  function nego2() {
    const coret = document.getElementById("coret");
    const newharga3 = document.getElementById("hargabaru3");
    const newharga2 = document.getElementById("hargabaru2");
    const newharga1 = document.getElementById("hargabaru1");
    const nodi = document.getElementById("nodiskon");
    if (diskon !== productId.statusnego) {
      coret.style.textDecoration = "line-through";
      newharga2.style.display = "block";
      newharga1.style.display = "none";
      newharga3.style.display = "none";
    } else {
      nodi.style.display = "block";
    }
  }

  function nego3() {
    const coret = document.getElementById("coret");
    const newharga1 = document.getElementById("hargabaru1");
    const newharga2 = document.getElementById("hargabaru2");
    const newharga3 = document.getElementById("hargabaru3");
    const nodi = document.getElementById("nodiskon");
    if (diskon !== productId.statusnego) {
      coret.style.textDecoration = "line-through";
      newharga1.style.display = "none";
      newharga2.style.display = "none";
      newharga3.style.display = "block";
    } else {
      nodi.style.display = "block";
    }
  }

  return (
    <section className=" bg-[#eaeeff] mx-auto px-[25px] h-full mt-[5rem]">
      {/* tombol back  */}
      <div className="absolute bg-red-500 text-white px-4 py-[10px]  rounded-full ">
        <Link className="flex justify-center items-center" to="/">
          <IoMdArrowRoundBack />
          back
        </Link>
      </div>
      {/* end tombol back  */}

      <div className="relative top-20 ">
        <div className="flex justify-between flex-col lg:flex-row">
          {/* up start */}

          {/* name and address  */}
          <div className="flex flex-col ">
            <h1 className="text-violet-900 font-bold text-[30px]">
              {productId.name}
            </h1>
            <h2 className="text-[20px] font-semibold text-gray-700">
              {productId.address}
            </h2>
          </div>
          {/* end name and address  */}

          {/* type product and location  */}
          <div className="flex my-5 items-center gap-x-5">
            <div className="bg-violet-500 px-2 rounded-full  text-white">
              {productId.type}
            </div>
            <div className="text-white bg-green-500 px-2 rounded-full">
              {productId.location}
            </div>
          </div>

          {/* end type product and location  */}

          {/* price start */}
          <div className="flex  items-center">
            <div className="text-violet-900 text-[30px] font-semibold">
              Rp.{productId.price}
            </div>
          </div>
        </div>
        {/* price end  */}

        {/* up end */}

        <div className=" rounded-lg flex flex-col lg:flex-row gap-x-16  mt-10 lg:mt-20">
          <div className=" flex flex-col w-full lg:max-w-[60%] mb-10">
            <img
              className="w-full rounded-[10px] mb-10"
              src={productId.imageLg}
              alt="product"
            ></img>

            <div className="flex justify-start items-center mb-10 gap-x-5 text-[20px] font-bold">
              <div className="text-violet-900  flex gap-x-2 justify-center items-center">
                <BiArea />
                {productId.bathrooms}
              </div>
              <div className="text-violet-900 flex  gap-x-2 justify-center items-center">
                <AiFillCodeSandboxCircle />
                {productId.bedrooms}
              </div>
            </div>
            <div>{productId.description}</div>
            <div className="mt-12">
              <div>
                <h1 className="text-center text-violet-700 text-[24px] font-semibold">
                  Nego
                </h1>
                <div className="flex flex-row  items-center justify-center mt-12 gap-x-3">
                  <button
                    style={{
                      backgroundColor:
                        diskon !== productId.statusnego ? "#8b5cf6" : "#ddd6fe",
                    }}
                    className=" text-white font-semibold px-4 py-3 rounded-lg "
                    onClick={nego1}
                  >
                    {productId.nego1}
                  </button>

                  <button
                    style={{
                      backgroundColor:
                        diskon !== productId.statusnego ? "#8b5cf6" : "#ddd6fe",
                    }}
                    className="  text-white font-semibold px-4 py-3 rounded-lg "
                    onClick={nego2}
                    id="tom2"
                  >
                    {productId.nego2}
                  </button>

                  <button
                    style={{
                      backgroundColor:
                        diskon !== productId.statusnego ? "#8b5cf6" : "#ddd6fe",
                    }}
                    className=" bhover:text-gray-600 text-white font-semibold px-4 py-3 rounded-lg "
                    onClick={nego3}
                    id="tom3"
                  >
                    {productId.nego3}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* contact  */}
          <div className=" flex flex-1 bg-white flex-col px-3 lg:px-0  border border-gray-900 rounded-lg">
            <div className="flex pt-20 -mt-10 mx-auto gap-x-10 ">
              <div className="w-20 h-20 border rounded-full border-gray-900">
                <img
                  className="rounded-full"
                  src={productId.agent.image}
                  alt="agent"
                ></img>
              </div>

              <div className="flex flex-col">
                <div className="text-violet-900 text-[20px]">
                  {productId.agent.name}
                </div>
                <div>{productId.agent.phone}</div>
                <Link className="text-blue-500 hover:text-red-500" to="/">
                  View Listings
                </Link>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col mb-20 lg:px-10 w-[100%]  pt-10 mx-auto gap-y-3"
            >
              {/* respons success  */}

              <div
                id="yes"
                className="bg-green-600 none text-white px-4 py-2 rounded-lg my-10"
              >
                <p className="text-[20px]">
                  Yeah, Pesan kamu berhasil terkirim 😊
                </p>
              </div>

              {/* respons fatal  */}

              <div
                id="no"
                className="none bg-red-500 text-white px-4 py-2 rounded-lg my-10"
              >
                <p className="text-[20px]">
                  Yah..., Pesan kamu gagal terkirim 😥. silahkan refresh dan
                  coba kembali. pastikan semua sudah terisi ya
                </p>
              </div>

              {/* name  */}
              <label>
                Name
                <span className="text-red-500 font-bold text-[20px] ">*</span>
              </label>
              <input
                className="full border border-gray-800 px-3 py-2 rounded-lg outline-none"
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
              ></input>

              {/* email  */}
              <label>
                Email
                <span className="text-red-500 font-bold text-[20px]">*</span>
              </label>
              <input
                className="border border-gray-800 px-3 py-2 rounded-lg"
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
              ></input>

              {/* phone  */}
              <label>
                Phone Number
                <span className="text-red-500 font-bold text-[20px]">*</span>
              </label>
              <input
                className="border border-gray-800 px-3 py-2 rounded-lg"
                type="tel"
                placeholder="phone"
                name="phone"
                id="phone"
              ></input>

              {/* message  */}
              <label>
                Message
                <span className="text-red-500 font-bold text-[20px]">*</span>
              </label>
              <textarea
                className="border border-gray-800 px-3 py-2 rounded-lg outline-none"
                type="textarea"
                placeholder="Message"
                name="message"
                id="message"
              ></textarea>

              <div className="my-5 text-violet-900 font-semibold text-[20px]">
                <h3>Jumlah uang yang harus anda bayar</h3>
              </div>

              {/* price  */}
              <div className="flex flex-wrap gap-x-2 mb-10">
                <h3
                  id="coret"
                  className="cor bg-green-500 px-3 py-1 rounded-full text-white font-semibold "
                >
                  Rp.{productId.price}
                </h3>

                <h3
                  id="hargabaru1"
                  className="none bg-green-500 px-3 py-1 rounded-full text-white font-semibold  animate-pulse "
                >
                  Rp.{productId.price - productId.nego1}
                </h3>

                <h3
                  id="hargabaru2"
                  className="none bg-green-500 px-3 py-1 rounded-full text-white font-semibold  animate-pulse "
                >
                  Rp.{productId.price - productId.nego2}
                </h3>

                <h3
                  id="hargabaru3"
                  className="none bg-green-500 px-3 py-1 rounded-full text-white font-semibold  animate-pulse "
                >
                  Rp.{productId.price - productId.nego3}
                </h3>
                <h3 className="none mt-2 font-semibold" id="nodiskon">
                  Mohon maaf tidak bisa nego😙
                </h3>
              </div>

              {/* buttom  */}
              <div className="flex gap-x-2 ">
                <button
                  type="submit"
                  value="send"
                  className="bg-violet-600 hover:bg-violet-900 text-white font-semibold rounded-lg px-[10px] py-[10px]"
                >
                  Send Message
                </button>
                <button className="font-semibold bg-transparant hover:bg-violet-900  text-black hover:text-white border rounded-lg border-gray-900 px-2">
                  Call Me
                </button>
              </div>
              {/* end buttom  */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
