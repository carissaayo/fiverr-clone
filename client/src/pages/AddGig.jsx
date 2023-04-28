import React from "react";

const AddGig = () => {
  return (
    <main className="flex justify-center">
      <div className="w-[1400px] py-[50px] px-0">
        <h1 className="text-[gray] font-light text-xl mb-[30px]">
          Add New Gig
        </h1>
        <div className="flex justify-between gap-[100px] container w-full ">
          <section className="flex flex-col gap-[10px] justify-between flex-1">
            <label htmlFor="" className="text-[gray] text-lg">
              Title
            </label>
            <input
              type="text"
              className=""
              placeholder="e.g I will do design a web page "
            />
            <label htmlFor="">Category</label>
            <select name="category" id="" className="">
              <option value="design" className="">
                Design
              </option>
              <option value="web" className="">
                Web Development
              </option>
              <option value="animation" className="">
                Animation
              </option>
              <option value="music" className="">
                Music
              </option>
            </select>

            <label htmlFor="">Cover Image</label>
            <input type="file" className="" />

            <label htmlFor="">Upload Images</label>
            <input type="file" className="" multiple />

            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              className=""
              placeholder="short description to introduce your service"
            ></textarea>

            <button className="border-[none] p-[20px] bg-[#1dbf73] text-white font-medium text-lg">Create</button>
          </section>

          <section className="flex flex-col gap-[10px] justify-between flex-1">
            <label htmlFor="" className="">
              Service Title
            </label>
            <input
              type="text"
              className=""
              placeholder="e.g one-page web design"
            />
            <label htmlFor="" className="">
              Short Description
            </label>
            <input
              type="text"
              className=""
              placeholder="short description of the service"
            />
            <label htmlFor="" className="">
              Delivery Time (e.g 3 days)
            </label>
            <input type="number" min={1} className="" />
            <label htmlFor="" className="">
              Revision Number
            </label>
            <input type="number" min={1} className="" />
            <label htmlFor="" className="">
              Add Features
            </label>
            <input type="text" className="" placeholder="e.g page design" />
            <input
              type="text"
              className=""
              placeholder="e.g upload files"
            />{" "}
            <input type="text" className="" placeholder="set up domain" />{" "}
            <input type="text" className="" placeholder="website hosting" />
            <label htmlFor="" className="">
              Price
            </label>
            <input type="number" min={5} className="" />
          </section>
        </div>
      </div>
    </main>
  );
};

export default AddGig;
