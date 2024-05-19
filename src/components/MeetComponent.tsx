import Button from "./Button";
import WidthWrapper from "./WidthWrapper";

export default function MeetComponent() {
  return (
    <div className="bg-[#272e5c] py-32 bg-clip">
      <WidthWrapper>
        <div className="flex items-center gap-3 flex-col">
          <h2 className="text-white text-[80px] max-[600px]:text-[40px] font-medium">
            Meet Tru-AI
          </h2>
          <p className="text-white/50 text-3xl text-center">
            Design. Create. Deploy.
          </p>
          <p className="text-sm text-white">the Future of AI | Power to EDIT</p>
          <p className="text-gray-400 text-center">
            Based On Your Website & Traffic Trends, Tru-AI Optimises Your
            Website
          </p>
          <Button.GhostedButton className="text-white border-white mt-5 py-3">
            Learn more
          </Button.GhostedButton>
        </div>
      </WidthWrapper>
    </div>
  );
}
