import LeftMenu from "../component/LeftMenu";
import RightPart from "../component/RightPart";
import dynamic from "next/dynamic";
const TopSlider = dynamic(
  () => import("../component/TopSlider"),
  // No need for SSR, when the module includes a library that only works in the
  // browser.
  { ssr: false }
);

function product() {
  return (
    <>
      <TopSlider />
      <div class="container">
        <div class="row lps">
          <LeftMenu />
          <RightPart />
        </div>
      </div>
    </>
  );
}

export default product;
