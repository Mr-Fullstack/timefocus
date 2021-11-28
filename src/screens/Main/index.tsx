// import React, { useState } from "react";
// import Home from "../Home";
// import Home2 from "../Home2";
// import Edit from "../Edit"
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// import {
//   Container,
// } from "./style";

// export default function () {
//   let hasStarted = false;
//   const [initialCount, setInitialCount] = useState(20);
//   const [descripiton, setDescripiton] = useState("Description your activities");
//   const [isEditing, setEditing] = useState(false);
//   const [count, setCount] = useState(20);
//   const [isRunning, setRunning] = useState(false);
//   const running = setInterval(checkRunningCount, 1000);

//   if (count === 100) {
//     setCount(count => count - 40);
//   }
//   function countStart() {
//     if (!hasStarted) {
//       setRunning(true);
//     }
//   }

//   function checkRunningCount() {
//     if (isRunning) {
//       if (!hasStarted) {
//         if (count > 0) {
//           setCount(count => count - 1);
//         }
//         hasStarted = true;
//       }
//     }
//     if (!isRunning) {
//       if (hasStarted) {
//         setCount(count => count);
//         hasStarted = false;
//       }
//     }
//   }

//   function countPause() {
//     setRunning(false);
//   }
//   function countRepeat() {
//     setCount(count => count = initialCount);
//     setRunning(true);
//   }
//   function countContinue() {
//     countStart()
//   }
//   function countDelete() {
//     setRunning(false);
//     setEditing(false);
//   }
//   function countEdit() {

//     setEditing(true)
//   }
//   function countSave() {
//     setEditing(false)
//   }

//   function splitCount() {
//     let countCurrent = count;
//     let countSplited = countCurrent.toString().split('');
//     return countConverted(countSplited)
//   }
//   function countConverted(countSplited: Array<number | string>) {
//     let countSplitedConverted;
//     if (count > 1000) {
//       countSplitedConverted = [countSplited[0], countSplited[1], ':', countSplited[2], countSplited[3]]
//     } else {
//       countSplitedConverted = [countSplited[0], ':', countSplited[1], countSplited[2]]
//       if (count < 100) {
//         countSplitedConverted = ['0', '0', ':', countSplited[0], countSplited[1]]
//       }
//       if (count < 10) {
//         countSplitedConverted = ['0', '0', ':', '0', countSplited[0]]
//       }
//     }
//     if (count === 0) {
//       countSplitedConverted = '00:00'
//     }
//     return countSplitedConverted
//   }

//   const data = {
//     count: count,
//     splitCount: splitCount,
//     isEditing: isEditing,
//     descripiton: descripiton
//   }
//   return (
//     <Container finished={(count === 0 ? false : true)}>
//       {isEditing && <Header />}
//       {isEditing ? <Edit /> : <Home2 />}
//       {isEditing && <Footer />}
//     </Container>
//   )
// }