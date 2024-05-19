import WidthWrapper from "./WidthWrapper";

export default function GetInTouch() {
  return (
    <div>
      <WidthWrapper>
        <div className="flex gap-6">
          <div className="flex-[0.4] flex flex-col gap-5 pt-[100px] max-[1000px]:flex-[0.5] max-[800px]:flex-1">
            <h3 className="text-5xl font-bold w-[300px]">
              Get in touch with us
            </h3>
            <p className="text-xl">Send your enquiry now!</p>
            <form className="flex bg-gray-300 p-2 rounded-full items-center pl-5 mt-8">
              <label className="flex-1">
                <input
                  type="email"
                  className="w-full bg-inherit outline-none border-none"
                  placeholder="Enter email address"
                />
              </label>
              <button className="bg-[#272e5c] text-white p-3 rounded-full px-7">
                Request demo
              </button>
            </form>
          </div>
          <div className="flex-[0.6] max-[1000px]:flex-[0.5] max-[800px]:hidden">
            <img src={"/assets/map_2_white.png"} alt="map" className="w-full" />
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
