import ImageGrid from "./ImageGrid";
import Banner from "./Banner";
import MetaInfo from "../../common/MetaInfo";
import "./index.css";

export default function Home() {
  return (
    <div id="home" className="flex-center column">
      <Banner />
      <MetaInfo title="Skip Wiese" />
      <ImageGrid />
    </div>
  );
}
