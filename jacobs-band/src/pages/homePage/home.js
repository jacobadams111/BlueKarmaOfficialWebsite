import React from "react";

import Bio from "../../components/bio/bio";
import Videos from "../../pages/videos/videos";
import Merch from "../../pages/merch/merchandise";
// import Contact from "../../pages/contact/contact";

import "../../styles/pages/home.scss";

const HomePage = () => {
  return (
    <div id={"home"} className={"home-container"}>
      <div id="svgContainer">
        <svg id="theEye" width="100%" height="100%">
          <pattern
            id="thePattern"
            x="0"
            y="0"
            width="124"
            height="170"
            patternUnits="userSpaceOnUse"
          >
            <g>
              <g>
                <g>
                  <path
                    id="topLeftIris"
                    d="M60.8601 44.82C57.4978 44.82 54.2111 45.817 51.4154 47.685C48.6198 49.553 46.4409 52.208 45.1542 55.3144C43.8675 58.4207 43.5308 61.8389 44.1868 65.1365C44.8427 68.4342 46.4618 71.4633 48.8393 73.8408C51.2168 76.2183 54.2459 77.8374 57.5436 78.4934C60.8413 79.1493 64.2594 78.8127 67.3657 77.526C70.4721 76.2393 73.1271 74.0603 74.9951 71.2647C76.8631 68.4691 77.8601 65.1823 77.8601 61.82C77.8601 57.3113 76.069 52.9873 72.8809 49.7992C69.6928 46.6111 65.3688 44.82 60.8601 44.82V44.82ZM67.3401 58.73C66.2231 58.728 65.1317 58.395 64.2039 57.773C63.2761 57.1509 62.5534 56.2678 62.1273 55.2352C61.7012 54.2027 61.5908 53.067 61.8099 51.9716C62.029 50.8763 62.5679 49.8705 63.3585 49.0813C64.1491 48.2922 65.1558 47.755 66.2515 47.5378C67.3472 47.3207 68.4828 47.4331 69.5146 47.8611C70.5464 48.289 71.4282 49.0132 72.0486 49.9421C72.669 50.871 73.0001 51.963 73.0001 53.08C73.0001 53.8228 72.8536 54.5583 72.5691 55.2445C72.2845 55.9306 71.8674 56.5539 71.3417 57.0787C70.816 57.6035 70.192 58.0194 69.5054 58.3028C68.8187 58.5861 68.0829 58.7313 67.3401 58.73V58.73Z"
                    fill="black"
                  />
                  <path
                    id="topLeftEye"
                    d="M100.08 53.82C96.6304 51.9555 93.4455 49.6384 90.6099 46.93C89.3278 45.1361 87.8852 43.4626 86.2999 41.93C84.4384 40.1039 82.4318 38.4317 80.2999 36.93C76.5099 34.34 69.89 29.8 61 29.77C52.11 29.74 45.4099 34.34 41.5899 37C39.459 38.503 37.4525 40.175 35.5899 42C34.0046 43.5353 32.5589 45.2085 31.2699 47C28.4387 49.7091 25.257 52.0264 21.8099 53.89C15.5299 57.29 11.0699 57.69 10.9299 59.74C10.8199 61.36 13.5499 61.59 19.6799 66.31C23.0771 68.9662 26.2726 71.8709 29.2399 75C30.4299 76.24 31.7899 77.73 31.7899 77.73C33.0799 79.19 33.6699 80 34.8599 81.21C43.5599 90.21 55.2699 91.77 56.5499 91.93C58.0128 92.1105 59.486 92.194 60.9599 92.18C62.4338 92.1937 63.9071 92.1102 65.37 91.93C66.65 91.77 78.3699 90.16 87.0599 81.21C88.2399 80 88.8399 79.21 90.1299 77.73C90.1299 77.73 91.4799 76.24 92.6699 75C95.6308 71.8623 98.8195 68.9477 102.21 66.28C108.34 61.56 111.07 61.33 110.95 59.71C110.81 57.62 106.36 57.22 100.08 53.82ZM61 90.93C56.2156 90.9216 51.5072 89.7338 47.2914 87.4716C43.0757 85.2094 39.4827 81.9427 36.8307 77.9607C34.1786 73.9787 32.5493 69.4042 32.087 64.6422C31.6246 59.8803 32.3435 55.0778 34.1799 50.66C39.3709 48.0871 44.8935 46.2463 50.59 45.19C57.4501 44.0166 64.4598 44.0166 71.32 45.19C77.0164 46.2463 82.539 48.0871 87.7299 50.66C89.5636 55.0708 90.2832 59.8652 89.8252 64.6199C89.3673 69.3747 87.746 73.9436 85.1043 77.9234C82.4626 81.9033 78.8818 85.1716 74.678 87.4399C70.4742 89.7083 65.7767 90.9069 61 90.93V90.93Z"
                    fill="black"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    repeatCount="indefinite"
                    dur="3s"
                    keyTimes="0;1"
                    values="0 0;124 0"
                  ></animateTransform>
                </g>
                <g>
                  <path
                    id="topRightIris"
                    d="M173.933 45.0502C170.571 45.0502 167.284 46.0472 164.489 47.9152C161.693 49.7832 159.514 52.4382 158.227 55.5446C156.941 58.6509 156.604 62.069 157.26 65.3667C157.916 68.6644 159.535 71.6935 161.913 74.071C164.29 76.4485 167.319 78.0676 170.617 78.7235C173.914 79.3795 177.333 79.0428 180.439 77.7561C183.545 76.4694 186.2 74.2905 188.068 71.4949C189.936 68.6992 190.933 65.4125 190.933 62.0502C190.933 57.5415 189.142 53.2175 185.954 50.0294C182.766 46.8412 178.442 45.0502 173.933 45.0502V45.0502ZM180.413 58.9602C179.296 58.9582 178.205 58.6251 177.277 58.0031C176.349 57.3811 175.627 56.498 175.201 55.4654C174.774 54.4328 174.664 53.2971 174.883 52.2018C175.102 51.1065 175.641 50.1007 176.432 49.3115C177.222 48.5223 178.229 47.9852 179.325 47.768C180.42 47.5508 181.556 47.6633 182.588 48.0912C183.62 48.5191 184.501 49.2433 185.122 50.1722C185.742 51.1012 186.073 52.1931 186.073 53.3102C186.073 54.053 185.927 54.7885 185.642 55.4746C185.358 56.1608 184.941 56.7841 184.415 57.3089C183.889 57.8336 183.265 58.2496 182.579 58.533C181.892 58.8163 181.156 58.9615 180.413 58.9602V58.9602Z"
                    fill="black"
                  />
                  <path
                    id="topRightEye"
                    d="M213.153 54.0501C209.704 52.1857 206.519 49.8685 203.683 47.1601C202.401 45.3663 200.958 43.6928 199.373 42.1601C197.512 40.334 195.505 38.6619 193.373 37.1601C189.583 34.5701 182.963 30.0301 174.073 30.0001C165.183 29.9701 158.483 34.5701 154.663 37.2301C152.532 38.7331 150.526 40.4052 148.663 42.2301C147.078 43.7654 145.632 45.4387 144.343 47.2301C141.512 49.9393 138.33 52.2566 134.883 54.1201C128.603 57.5201 124.143 57.9201 124.003 59.9701C123.893 61.5901 126.623 61.8201 132.753 66.5401C136.15 69.1964 139.346 72.101 142.313 75.2301C143.503 76.4701 144.863 77.9601 144.863 77.9601C146.153 79.4201 146.743 80.2301 147.933 81.4401C156.633 90.4401 168.343 92.0001 169.623 92.1601C171.086 92.3406 172.559 92.4242 174.033 92.4101C175.507 92.4239 176.98 92.3404 178.443 92.1601C179.723 92.0001 191.443 90.3901 200.133 81.4401C201.313 80.2301 201.913 79.4401 203.203 77.9601C203.203 77.9601 204.553 76.4701 205.743 75.2301C208.704 72.0925 211.893 69.1779 215.283 66.5101C221.413 61.7901 224.143 61.5601 224.023 59.9401C223.883 57.8501 219.433 57.4501 213.153 54.0501ZM174.073 91.1601C169.289 91.1518 164.58 89.9639 160.365 87.7018C156.149 85.4396 152.556 82.1729 149.904 78.1909C147.252 74.2088 145.623 69.6343 145.16 64.8724C144.698 60.1105 145.417 55.308 147.253 50.8901C152.444 48.3173 157.967 46.4764 163.663 45.4201C170.523 44.2468 177.533 44.2468 184.393 45.4201C190.09 46.4764 195.612 48.3173 200.803 50.8901C202.637 55.301 203.356 60.0953 202.898 64.8501C202.441 69.6049 200.819 74.1738 198.178 78.1536C195.536 82.1334 191.955 85.4017 187.751 87.6701C183.547 89.9384 178.85 91.1371 174.073 91.1601V91.1601Z"
                    fill="black"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    repeatCount="indefinite"
                    dur="3s"
                    keyTimes="0;1"
                    values="-237 0;-113 0"
                  ></animateTransform>
                </g>
              </g>
              <g>
                <g>
                  <path
                    id="bottomLeftIris"
                    d="M60.9334 121.05C57.5711 121.05 54.2843 122.047 51.4887 123.915C48.693 125.783 46.5141 128.438 45.2274 131.545C43.9407 134.651 43.6041 138.069 44.26 141.367C44.916 144.664 46.535 147.693 48.9125 150.071C51.29 152.448 54.3191 154.068 57.6168 154.724C60.9145 155.379 64.3326 155.043 67.439 153.756C70.5453 152.469 73.2004 150.291 75.0683 147.495C76.9363 144.699 77.9334 141.412 77.9334 138.05C77.9334 133.541 76.1423 129.217 72.9542 126.029C69.7661 122.841 65.442 121.05 60.9334 121.05V121.05ZM67.4134 134.96C66.2963 134.958 65.2049 134.625 64.2771 134.003C63.3493 133.381 62.6267 132.498 62.2006 131.465C61.7745 130.433 61.664 129.297 61.8831 128.202C62.1023 127.106 62.6412 126.101 63.4317 125.311C64.2223 124.522 65.2291 123.985 66.3248 123.768C67.4205 123.551 68.556 123.663 69.5878 124.091C70.6196 124.519 71.5015 125.243 72.1219 126.172C72.7422 127.101 73.0734 128.193 73.0734 129.31C73.0734 130.053 72.9269 130.789 72.6423 131.475C72.3578 132.161 71.9407 132.784 71.415 133.309C70.8893 133.834 70.2652 134.25 69.5786 134.533C68.8919 134.816 68.1562 134.961 67.4134 134.96V134.96Z"
                    fill="black"
                  />
                  <path
                    id="bottomLeftEye"
                    d="M100.153 130.05C96.7036 128.186 93.5187 125.869 90.6832 123.16C89.401 121.366 87.9584 119.693 86.3732 118.16C84.5117 116.334 82.5051 114.662 80.3732 113.16C76.5832 110.57 69.9632 106.03 61.0732 106C52.1832 105.97 45.4832 110.57 41.6632 113.23C39.5323 114.733 37.5258 116.405 35.6632 118.23C34.0778 119.765 32.6321 121.439 31.3432 123.23C28.512 125.939 25.3303 128.257 21.8832 130.12C15.6032 133.52 11.1432 133.92 11.0032 135.97C10.8932 137.59 13.6232 137.82 19.7532 142.54C23.1504 145.196 26.3458 148.101 29.3132 151.23C30.5032 152.47 31.8632 153.96 31.8632 153.96C33.1532 155.42 33.7432 156.23 34.9332 157.44C43.6332 166.44 55.3432 168 56.6232 168.16C58.0861 168.341 59.5593 168.424 61.0332 168.41C62.5071 168.424 63.9803 168.34 65.4432 168.16C66.7232 168 78.4432 166.39 87.1332 157.44C88.3132 156.23 88.9132 155.44 90.2032 153.96C90.2032 153.96 91.5532 152.47 92.7432 151.23C95.7041 148.092 98.8928 145.178 102.283 142.51C108.413 137.79 111.143 137.56 111.023 135.94C110.883 133.85 106.433 133.45 100.153 130.05ZM61.0732 167.16C56.2889 167.152 51.5804 165.964 47.3647 163.702C43.1489 161.44 39.556 158.173 36.9039 154.191C34.2519 150.209 32.6226 145.634 32.1602 140.872C31.6978 136.11 32.4167 131.308 34.2532 126.89C39.4442 124.317 44.9667 122.476 50.6632 121.42C57.5234 120.247 64.533 120.247 71.3932 121.42C77.0897 122.476 82.6122 124.317 87.8032 126.89C89.6368 131.301 90.3564 136.095 89.8985 140.85C89.4406 145.605 87.8192 150.174 85.1775 154.154C82.5359 158.133 78.9551 161.402 74.7513 163.67C70.5475 165.938 65.8499 167.137 61.0732 167.16V167.16Z"
                    fill="black"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    repeatCount="indefinite"
                    dur="3s"
                    keyTimes="0;1"
                    values="124 0;0 0"
                  ></animateTransform>
                </g>
                <g>
                  <path
                    id="bottomRightIris"
                    d="M174.007 121.28C170.644 121.28 167.358 122.277 164.562 124.145C161.766 126.013 159.587 128.668 158.301 131.775C157.014 134.881 156.677 138.299 157.333 141.597C157.989 144.895 159.608 147.924 161.986 150.301C164.363 152.679 167.392 154.298 170.69 154.954C173.988 155.61 177.406 155.273 180.512 153.986C183.619 152.7 186.274 150.521 188.142 147.725C190.01 144.929 191.007 141.643 191.007 138.28C191.007 133.772 189.216 129.448 186.027 126.26C182.839 123.071 178.515 121.28 174.007 121.28V121.28ZM180.487 135.19C179.37 135.188 178.278 134.855 177.35 134.233C176.423 133.611 175.7 132.728 175.274 131.696C174.848 130.663 174.737 129.527 174.956 128.432C175.176 127.337 175.714 126.331 176.505 125.542C177.296 124.752 178.302 124.215 179.398 123.998C180.494 123.781 181.629 123.893 182.661 124.321C183.693 124.749 184.575 125.473 185.195 126.402C185.815 127.331 186.147 128.423 186.147 129.54C186.147 130.283 186 131.019 185.716 131.705C185.431 132.391 185.014 133.014 184.488 133.539C183.963 134.064 183.338 134.48 182.652 134.763C181.965 135.046 181.229 135.192 180.487 135.19V135.19Z"
                    fill="black"
                  />
                  <path
                    id="bottomRightEye"
                    d="M213.226 130.28C209.777 128.416 206.592 126.099 203.756 123.39C202.474 121.596 201.032 119.923 199.446 118.39C197.585 116.564 195.578 114.892 193.446 113.39C189.656 110.8 183.036 106.26 174.146 106.23C165.256 106.2 158.556 110.8 154.736 113.46C152.606 114.963 150.599 116.635 148.736 118.46C147.151 119.996 145.705 121.669 144.416 123.46C141.585 126.169 138.404 128.487 134.956 130.35C128.676 133.75 124.216 134.15 124.076 136.2C123.966 137.82 126.696 138.05 132.826 142.77C136.224 145.427 139.419 148.331 142.386 151.46C143.576 152.7 144.936 154.19 144.936 154.19C146.226 155.65 146.816 156.46 148.006 157.67C156.706 166.67 168.416 168.23 169.696 168.39C171.159 168.571 172.633 168.654 174.106 168.64C175.58 168.654 177.054 168.571 178.516 168.39C179.796 168.23 191.516 166.62 200.206 157.67C201.386 156.46 201.986 155.67 203.276 154.19C203.276 154.19 204.626 152.7 205.816 151.46C208.777 148.323 211.966 145.408 215.356 142.74C221.486 138.02 224.216 137.79 224.096 136.17C223.956 134.08 219.506 133.68 213.226 130.28ZM174.146 167.39C169.362 167.382 164.654 166.194 160.438 163.932C156.222 161.67 152.629 158.403 149.977 154.421C147.325 150.439 145.696 145.865 145.233 141.103C144.771 136.341 145.49 131.538 147.326 127.12C152.517 124.547 158.04 122.707 163.736 121.65C170.597 120.477 177.606 120.477 184.466 121.65C190.163 122.707 195.685 124.547 200.876 127.12C202.71 131.531 203.43 136.325 202.972 141.08C202.514 145.835 200.892 150.404 198.251 154.384C195.609 158.364 192.028 161.632 187.825 163.9C183.621 166.169 178.923 167.367 174.146 167.39V167.39Z"
                    fill="black"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    repeatCount="indefinite"
                    dur="3s"
                    keyTimes="0;1"
                    values="-113 0;-237 0"
                  ></animateTransform>
                </g>
              </g>
            </g>
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#thePattern)"
          ></rect>
        </svg>
      </div>
      <Bio />
      <Videos />
      <Merch />
      {/* <Contact /> I COMMENTED THIS OUT SINCE WE DON'T CURRENTLY HAVE A CONTACT EMAIL OF PHONE # */}
    </div>
  );
};

export default HomePage;
