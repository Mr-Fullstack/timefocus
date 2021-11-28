// import React, { useEffect, useState } from "react";
// import { Text } from "react-native";
// import { FontAwesome5 } from '@expo/vector-icons';

// import {
//   Container,
//   ContainerSwippper,
//   SwippperIcon,
//   CountCurrent,
//   DescriptionCurrent,
//   Actions,
// } from "./style";

// import Button from "../../components/Button";
// import ButtonActionCount from "../../components/ButtonActionCount";


// /* to do */

// // make logical add configuration button to edit count []
// // make logical add configuration button to delete count []
// // change background-color and make logical add configuration button to pause count []

// export default function ({ data }: Object) {

//   return (

//             <Container>
//               <CountCurrent>{data.splitCount()}</CountCurrent>
//               <DescriptionCurrent>{data.descripiton}</DescriptionCurrent>
//             </Container>
//             <ContainerSwippper>
//               <SwippperIcon>
//                 <FontAwesome5 name="angle-double-down" size={44} />
//               </SwippperIcon>
//             </ContainerSwippper>
//             <Actions>
//               {
//                 data.count > 0 ?
//                 data.isRunning ?
//                     <Button title={'Pause'} trigger='pause' onPress={data.countPause} /> :
//                     <Button title={'Start'} trigger='start' onPress={data.countStart} /> :
//                   <React.Fragment>
//                     <Button title={'Repeat'} trigger='repeat' onPress={data.countRepeat} />
//                   </React.Fragment>
//               }
//             </Actions>

//   )
// }