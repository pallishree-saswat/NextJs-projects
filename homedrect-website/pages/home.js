import { useRouter } from "next/router";
import Link from "next/link";
// import TopSlider from "../component/TopSlider";
import dynamic from 'next/dynamic'
const TopSlider = dynamic(
  () => import("../component/TopSlider"),
  // No need for SSR, when the module includes a library that only works in the
  // browser.
  { ssr: false }
);

const Slider = dynamic(
  () => import("../component/Slider"),
  // No need for SSR, when the module includes a library that only works in the
  // browser.
  { ssr: false }
);

import SignupForm from '../component/SignupForm'

function home() {
  return (
    <div>
      <section class="body_wp">
        <TopSlider />
        <div class="container step_3">
          <div class="row banner">
            <div class="col-sm-6">
              <h1>
                Lowest prices on
                <br /> 500+ products
              </h1>
            </div>
            <div class="col-sm-6">
              <img src="img/pic5.png" alt="" />
            </div>
          </div>
        </div>
        <div class="container step_4">
          <h1>Shop by Category</h1>
          <div class="category_wp">
            <div class="cata_l">
              <div class="cata_img">
                <img src="img/pic6.png" alt="" />
              </div>
              <div class="cate_text">
                <h2>up to 70% off</h2>
                <h3>
                  Dal, atta & <br />
                  <span>more</span>
                </h3>
              </div>
              <div class="cata_arrow">
                <i class="fa fa-angle-right"></i>
              </div>
            </div>
            <div class="cata_l">
              <div class="cata_img">
                <img src="img/pic7.png" alt="" />
              </div>
              <div class="cate_text">
                <h2>up to 70% off</h2>
                <h3>
                  Dal, atta & <br />
                  <span>more</span>
                </h3>
              </div>
              <div class="cata_arrow">
                <i class="fa fa-angle-right"></i>
              </div>
            </div>
            <div class="cata_l">
              <div class="cata_img">
                <img src="img/pic8.png" alt="" />
              </div>
              <div class="cate_text">
                <h2>up to 70% off</h2>
                <h3>
                  Dal, atta & <br />
                  <span>more</span>
                </h3>
              </div>
              <div class="cata_arrow">
                <i class="fa fa-angle-right"></i>
              </div>
            </div>
            <div class="cata_l">
              <div class="cata_img">
                <img src="img/pic6.png" alt="" />
              </div>
              <div class="cate_text">
                <h2>up to 70% off</h2>
                <h3>
                  Dal, atta & <br />
                  <span>more</span>
                </h3>
              </div>
              <div class="cata_arrow">
                <i class="fa fa-angle-right"></i>
              </div>
            </div>
            <div class="cata_l">
              <div class="cata_img">
                <img src="img/pic7.png" alt="" />
              </div>
              <div class="cate_text">
                <h2>up to 70% off</h2>
                <h3>
                  Dal, atta & <br />
                  <span>more</span>
                </h3>
              </div>
              <div class="cata_arrow">
                <i class="fa fa-angle-right"></i>
              </div>
            </div>
            <div class="cata_l">
              <div class="cata_img">
                <img src="img/pic8.png" alt="" />
              </div>
              <div class="cate_text">
                <h2>up to 70% off</h2>
                <h3>
                  Dal, atta & <br />
                  <span>more</span>
                </h3>
              </div>
              <div class="cata_arrow">
                <i class="fa fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
       <Slider />
        <div class="container step_6">
          <div class="row">
            <div class="col-sm-4">
              <div class="ftr">
                <h1>
                  buy 1 <br />
                  get 2 free
                </h1>
                <p>on 200+products</p>
                <img src="img/pic10.png" alt="" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="ftr">
                <h1>
                  buy 1 <br />
                  get 2 free
                </h1>
                <p>on 200+products</p>
                <img src="img/pic10.png" alt="" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="ftr">
                <h1>
                  buy 1 <br />
                  get 2 free
                </h1>
                <p>on 200+products</p>
                <img src="img/pic10.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SignupForm/>
    </div>
  );
}

export default home;
