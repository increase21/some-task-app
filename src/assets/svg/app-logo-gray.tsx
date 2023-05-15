import React from "react";
import { AppSvgProps } from "../../typings/components";
import Svg, {
   Path,
} from 'react-native-svg';

export const AppLogoGray = (props: AppSvgProps) => (
   <Svg {...props} width={props.width || "81"} height={props.height || "26"} viewBox="0 0 81 26" fill="none">
      <Path d="M5.60757 10.4332L5.43092 1.73373H0.220093V24.5201H5.60757V15.5557C5.74004 8.62262 8.38961 6.37048 15.4993 5.92888V1.38045C9.14032 1.38045 6.79987 3.80923 5.7842 10.4332H5.60757Z" fill={props.fill || "#71879C"} fillOpacity="0.2" />
      <Path d="M17.936 24.5201H23.3235V1.73373H17.936V24.5201Z" fill={props.fill || "#71879C"} fillOpacity="0.2" />
      <Path d="M37.2768 25.2266C43.7241 25.2266 47.5219 22.577 47.5219 18.1169C47.5219 14.7166 45.358 12.7736 40.8979 11.8021L34.8922 10.5215C32.9934 10.0799 31.9335 9.10837 31.9335 7.8719C31.9335 6.06136 33.7441 4.95737 36.7469 4.95737C40.0589 4.95737 42.0019 6.54712 42.0019 9.15253H47.1686C47.1686 4.03002 43.2384 1.02718 36.5703 1.02718C30.4763 1.02718 26.6344 3.76506 26.6344 8.00438C26.6344 11.4488 29.1515 13.6126 33.3025 14.4517L39.0432 15.6881C41.3837 16.2181 42.1786 16.9688 42.1786 18.3377C42.1786 20.1924 40.3238 21.2964 37.321 21.2964C33.6558 21.2964 31.5803 19.795 31.4036 17.1012H26.1045C26.2811 22.3121 30.2555 25.2266 37.2768 25.2266Z" fill={props.fill || "#71879C"} fillOpacity="0.2" />
      <Path d="M71.9562 12.3762C71.9562 6.10552 67.6728 1.02718 60.6955 1.02718C53.6742 1.02718 49.0374 5.61977 49.0374 13.0386C49.0374 21.0756 53.7625 25.2266 60.9605 25.2266C66.0389 25.2266 71.073 22.1796 71.7796 16.5713H66.8779C66.3038 19.1326 64.14 21.0314 60.9605 21.0314C57.0745 21.0314 54.3366 18.5585 54.2041 14.1426H71.9562V12.3762ZM60.4748 5.22233C64.0517 5.22233 66.3921 7.43031 66.6571 11.0955H54.2041C54.4691 7.20951 57.1186 5.22233 60.4748 5.22233Z" fill="#71879C" fillOpacity="0.2" />
      <Path d="M80.7799 4.40779C80.7799 6.33956 79.2139 7.90557 77.2821 7.90557C75.3503 7.90557 73.7843 6.33956 73.7843 4.40779C73.7843 2.47602 75.3503 0.910004 77.2821 0.910004C79.2139 0.910004 80.7799 2.47602 80.7799 4.40779Z" fill="#71879C" fillOpacity="0.2" />
   </Svg>
)

export const AppLogoWhite = (props: AppSvgProps) => (
   <Svg width={props.width || "123"} height={props.height || "38"} viewBox="0 0 123 38" fill="none">
      <Path d="M8.22568 14.9432L7.95597 1.55069H0V36.6297H8.22568V22.8292C8.42795 12.156 12.4734 8.68886 23.3285 8.00903V1.00683C13.6196 1.00683 10.0461 4.74587 8.49537 14.9432H8.22568Z" fill={props.fill || "white"} />
      <Path d="M27.0489 36.6297H35.2746V1.55069H27.0489V36.6297Z" fill={props.fill || "white"} />
      <Path d="M56.5788 37.7174C66.4227 37.7174 72.2211 33.6384 72.2211 26.7722C72.2211 21.5375 68.9173 18.5463 62.1076 17.0507L52.938 15.0792C50.0388 14.3994 48.4206 12.9038 48.4206 11.0003C48.4206 8.21298 51.185 6.51342 55.7698 6.51342C60.8265 6.51342 63.7932 8.96078 63.7932 12.9718H71.6817C71.6817 5.08578 65.681 0.462975 55.5001 0.462975C46.1956 0.462975 40.3298 4.67789 40.3298 11.2042C40.3298 16.5068 44.1729 19.838 50.5107 21.1297L59.2758 23.0332C62.8492 23.8489 64.0629 25.0047 64.0629 27.1121C64.0629 29.9674 61.2311 31.6669 56.6463 31.6669C51.0501 31.6669 47.8812 29.3555 47.6115 25.2086H39.5207C39.7904 33.2305 45.8585 37.7174 56.5788 37.7174Z" fill={props.fill || "white"} />
      <Path d="M109.528 17.9345C109.528 8.28096 102.988 0.462975 92.3349 0.462975C81.6145 0.462975 74.5351 7.53315 74.5351 18.9542C74.5351 31.327 81.7494 37.7174 92.7394 37.7174C100.493 37.7174 108.179 33.0266 109.258 24.3928H101.774C100.898 28.3358 97.5939 31.259 92.7394 31.259C86.8062 31.259 82.6259 27.452 82.4236 20.6538H109.528V17.9345ZM91.9978 6.92131C97.4591 6.92131 101.033 10.3204 101.437 15.963H82.4236C82.8282 9.98052 86.8736 6.92131 91.9978 6.92131Z" fill={props.fill || "white"} />
      <Path d="M123 5.66734C123 8.64126 120.609 11.0521 117.66 11.0521C114.71 11.0521 112.319 8.64126 112.319 5.66734C112.319 2.69343 114.71 0.282593 117.66 0.282593C120.609 0.282593 123 2.69343 123 5.66734Z" fill={props.fill || "white"} />
   </Svg>
)