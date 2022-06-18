// import React, { useEffect } from "react";
// import { View, Image, TouchableOpacity } from "react-native";
//
// export function SelectNum() {
//   const [firstClicked, isFirstClicked] = React.useState(false);
//   const [secondClicked, isSecondClicked] = React.useState(false);
//   const [thirdClicked, isThirdClicked] = React.useState(false);
//
//   const [firstSelected, setFirstSelected] = React.useState(require('../../assets/images/make-accessory/one-gray.png'));
//   const [secondSelected, setSecondSelected] = React.useState(require('../../assets/images/make-accessory/one-gray.png'));
//   const [thirdSelected, setThirdSelected] = React.useState(require('../../assets/images/make-accessory/one-gray.png'));
//
//   const btnClicked = (id) => {
//     if (id === 1) {
//       setFirstBtnClicked(!firstBtnClicked);
//       setSecondBtnClicked(false);
//       setThirdBtnClicked(false);
//     } else if (id === 2) {
//       setSecondBtnClicked(!secondBtnClicked);
//       setFirstBtnClicked(false);
//       setThirdBtnClicked(false);
//     } else if (id === 3) {
//       setThirdBtnClicked(!thirdBtnClicked);
//       setFirstBtnClicked(false);
//       setSecondBtnClicked(false);
//     }
//   }
//
//   useEffect(() => {
//     if (firstBtnClicked === true) {
//       setFirstBtnStyle(styles.clickedBtn);
//       setSecondBtnStyle(styles.button);
//       setThirdBtnStyle(styles.button);
//       props.onClick("1");
//     } else if (secondBtnClicked === true) {
//       setFirstBtnStyle(styles.button);
//       setSecondBtnStyle(styles.clickedBtn);
//       setThirdBtnStyle(styles.button);
//       props.onClick("2");
//     } else if (thirdBtnClicked === true) {
//       setFirstBtnStyle(styles.button);
//       setSecondBtnStyle(styles.button);
//       setThirdBtnStyle(styles.clickedBtn);
//       props.onClick("3");
//     } else {
//       setFirstBtnStyle(styles.button);
//       setSecondBtnStyle(styles.button);
//       setThirdBtnStyle(styles.button);
//       props.onClick("");
//     }
//   },[firstBtnClicked, secondBtnClicked, thirdBtnClicked])
//
//   return (
//     <View>
//       <TouchableOpacity onPress={btnClicked(1)}>
//         <Image source={firstSelected}/>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={btnClicked(2)}>
//         <Image source={secondSelected}/>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={btnClicked(3)}>
//         <Image source={thirdSelected}/>
//       </TouchableOpacity>
//     </View>
//   );
// }
