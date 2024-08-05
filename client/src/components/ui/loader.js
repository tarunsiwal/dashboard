// import React from "react";

// const Loader = () => {
//   return (
//     <div className="loader loader--style5" title="4">
//       <svg
//         version="1.1"
//         id="Layer_1"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         x="0px"
//         y="0px"
//         width="24px"
//         height="30px"
//         viewBox="0 0 24 30"
//         style={{ enableBackground: "new 0 0 50 50" }}
//         xmlSpace="preserve"
//       >
//         <rect x="0" y="0" width="4" height="10" fill="#63e8eb">
//           <animateTransform
//             attributeType="xml"
//             attributeName="transform"
//             type="translate"
//             values="0 0; 0 20; 0 0"
//             begin="0"
//             dur="0.6s"
//             repeatCount="indefinite"
//           />
//         </rect>
//         <rect x="10" y="0" width="4" height="10" fill="#63e8eb">
//           <animateTransform
//             attributeType="xml"
//             attributeName="transform"
//             type="translate"
//             values="0 0; 0 20; 0 0"
//             begin="0.2s"
//             dur="0.6s"
//             repeatCount="indefinite"
//           />
//         </rect>
//         <rect x="20" y="0" width="4" height="10" fill="#63e8eb">
//           <animateTransform
//             attributeType="xml"
//             attributeName="transform"
//             type="translate"
//             values="0 0; 0 20; 0 0"
//             begin="0.4s"
//             dur="0.6s"
//             repeatCount="indefinite"
//           />
//         </rect>
//       </svg>
//     </div>
//   );
// };

// export default Loader;

import React from "react";

const Loader = () => {
  return (
    <div className="loader loader--style8" title="7">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="24px"
        height="30px"
        viewBox="0 0 24 30"
        style={{ enableBackground: "new 0 0 50 50" }}
        xmlSpace="preserve"
      >
        <rect x="0" y="10" width="4" height="10" fill="#63e8eb" opacity="0.2">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="8" y="10" width="4" height="10" fill="#63e8eb" opacity="0.2">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="16" y="10" width="4" height="10" fill="#63e8eb" opacity="0.2">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default Loader;
