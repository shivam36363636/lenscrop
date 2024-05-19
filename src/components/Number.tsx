import WidthWrapper from "./WidthWrapper";

export default function Number() {
  return (
    <div className="bg-[#272e5c] text-white py-14">
      <WidthWrapper>
        <div className="flex flex-col gap-14">
          <p className="text-center text-3xl">By the numbers</p>
          <div className="flex">
            <div className="flex-1 flex flex-col items-center gap-2 border-r">
              <p className="text-4xl font-bold">15+</p>
              <p className="flex flex-col gap-1 items-center">
                <span>Solutions for</span>
                <span>Global crises</span>
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 border-r">
              <p className="text-4xl font-bold">10+</p>
              <p className="flex flex-col gap-1 items-center">
                <span>University</span>
                <span>Collaborations</span>
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <p className="text-4xl font-bold">25+</p>
              <p className="flex flex-col gap-1 items-center">
                <span>Employees</span>
                <span>Worldwide</span>
              </p>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
