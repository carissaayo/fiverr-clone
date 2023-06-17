import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const AddGig = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    // navigate("/mygigs")
  };

  return (
    <main className="flex justify-center">
      <div className="w-[1400px] py-12 px-0">
        <h1 className="text-gray-500 font-light text-xl mb-8 w-[max-content]">
          Add New Gig
        </h1>
        <div className="flex justify-between gap-[100px]  w-full ">
          <section className="flex flex-col gap-[10px] justify-between flex-1">
            <label htmlFor="" className="text-[gray] text-lg">
              Title
            </label>
            <input
              type="text"
              className="p-5"
              placeholder="e.g I will do design a web page "
              onChange={handleChange}
            />
            <label htmlFor="" className="text-gray-500 text-lg">
              Category
            </label>
            <select
              name="category"
              id=""
              className="p-5"
              onChange={handleChange}
            >
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
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-5">
                <label htmlFor="" className="text-gray-500 text-lg">
                  Cover Image
                </label>
                <input
                  type="file"
                  className="p-5"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />

                <label htmlFor="" className="text-gray-500 text-lg">
                  Upload Images
                </label>
                <input
                  type="file"
                  className="p-5"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>

              <button
                onClick={handleUpload}
                className="border-none p-5 text-white font-medium  text-lg cursor-pointer"
              >
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>

            <label htmlFor="" className="text-gray-500 text-lg">
              Description
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              className="p-5"
              placeholder="short description to introduce your service"
              onChange={handleChange}
            ></textarea>

            <button
              className="border-[none] p-[20px] bg-[#1dbf73] text-white font-medium text-lg"
              onClick={handleSubmit}
            >
              Create
            </button>
          </section>

          <section className="flex flex-col gap-[10px] justify-between flex-1">
            <label htmlFor="" className="text-gray-500 text-lg">
              Service Title
            </label>
            <input
              type="text"
              className="p-5"
              placeholder="e.g one-page web design"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-gray-500 text-lg">
              Short Description
            </label>
            <input
              type="text"
              className="p-5"
              placeholder="short description of the service"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-gray-500 text-lg">
              Delivery Time (e.g 3 days)
            </label>
            <input
              type="number"
              min={1}
              className="p-5"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-gray-500 text-lg">
              Revision Number
            </label>
            <input
              type="number"
              min={1}
              className="p-5"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-gray-500 text-lg">
              Add Features
            </label>
            <form action="" className="flex justify-between" onSubmit={handleFeature}>
              <input
                type="text"
                placeholder="e.g. page design"
                className="p-5 w-[4/5]"
              />
              <button type="submit">add</button>
            </form>
            <div className="flex gap-5">
              {state?.features?.map((f) => (
                <div className="" key={f}>
                  <button
                  className="h-[30px] text-xs font-normal bg-transparent text-red-600 border-solid border-red-600 border-[1px] flex items-center gap-5"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>

            <label htmlFor="" className="text-gray-500 text-lg">
              Price
            </label>
            <input
              type="number"
              nChange={handleChange}
              name="price"
              className="p-5"
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default AddGig;
