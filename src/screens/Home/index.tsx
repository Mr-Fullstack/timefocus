import React, { useEffect, useState } from "react";
import { Audio } from 'expo-av';
import {
  Container,
  Header,
  SoundEffect,
  SoundEffectIcon,
  HeaderText,
  WrapperMain,
  WrapperMainSwippper,
  WrapperMainSwippperIcon,
  WrapperMainCurrent,
  CountCurrent,
  DescriptionCurrent,
  WrapperMainEdit,
  CountEdit,
  DescriptionEdit,
  Actions,
  Footer
} from "./style";



import Button from "../../components/Button";
import ButtonActionCount from "../../components/ButtonActionCount";

/* to do */

// publish in expo []
// publish in playstore [] 

export default function Home() {
  const [isFinished, setIsFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [currentMinutes, setCurrentMinutes] = useState('1');
  const [countSeconds, setSeconds] = useState(0)
  const [isRunning, setRunning] = useState(false);
  const [swiperClick, setSwiperClick] = useState(false);
  const [minutesInitialSave, setMinutesInitial] = useState('1');
  const [descripiton, setDescription] = useState("a description of the activity here");
  const [toggleSound, setToggleSound] = useState(true);
  const [sound, setSound] = useState<Audio.Sound>();
  const soundStart = require('../../assets/sounds/ticking.mp3')
  const soundFinished = require('../../assets/sounds/bell.mp3')


  async function playSoundStart(play: boolean = true) {
    const { sound } = await Audio.Sound.createAsync(
      soundStart
    );

    if (play) {
      setSound(sound);
      await sound.playAsync();
      sound.setIsLoopingAsync(true)
    } else {
      await sound.stopAsync();
      sound.setIsLoopingAsync(false)
    }

  }

  async function playSoundFinished(play: boolean = true) {
    const { sound } = await Audio.Sound.createAsync(
      soundFinished
    );
    if (play) {
      playSoundStart(false)
      setSound(sound);
      await sound.playAsync();
      sound.setIsLoopingAsync(false)
    } else {
      await sound.stopAsync();
      sound.setIsLoopingAsync(false)
    }

  }

  React.useEffect(() => {

    if (isFinished) {
      playSoundFinished()
      sound?.unloadAsync();
    }

    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [isFinished]);


  useEffect(() => {
    const running = setInterval(() => {
      if (!isFinished) {
        if (isRunning) {
          if (countSeconds > 0) {
            setSeconds(seconds => seconds - 1)
          }
          if (countSeconds === 0 && parseInt(currentMinutes) > 0) {
            setCurrentMinutes(currentMinutes => (parseInt(currentMinutes) - 1).toString());
            setSeconds(59);
          }
          if (countSeconds === 0 && parseInt(currentMinutes) === 0) {
            setSeconds(0);
            setCurrentMinutes(currentMinutes => (0).toString());
          }
        }
      }
      if (countSeconds === 0 && parseInt(currentMinutes) === 0) {
        setIsFinished(true)
      }
    }, 1000);
    return () => clearInterval(running);
  }, [currentMinutes, countSeconds, isRunning]);

  function countStart() {

    if (parseInt(currentMinutes) >= 1) {
      setCurrentMinutes(currentMinutes => (parseInt(currentMinutes) - 1).toString());
    }
    if (!hasStarted) {
      setSeconds(59);
      setHasStarted(true);
    }
    if (!isRunning) {
      playSoundStart();
      setRunning(true);
    }
  }

  function countPause() {
    sound?.pauseAsync();
    if (isRunning) {
      setRunning(false);
    }
  }
  function countContinue() {
    sound?.playAsync();
    if (!isRunning) {
      setRunning(true);
    }
  }
  function countRepeat() {
    if (isFinished) {
      setIsFinished(false);
    }
    setRunning(false);
    setEditing(false);
    setHasStarted(false);
    setCurrentMinutes(minutesInitialSave);
  }

  function countDelete() {
    setRunning(false);
    setEditing(false);
    setHasStarted(false);
    setSeconds(0);
    setCurrentMinutes(minutesInitialSave);
  }
  function countEdit() {
    if (parseInt(currentMinutes) === 0 && countSeconds === 0) {
      setRunning(false);
      setCurrentMinutes('0');
      setEditing(true);
    } else {
      setEditing(true);
    }
  }
  function countSave() {

    if (isFinished) {
      setIsFinished(false);
    }
    setSeconds(0);
    setHasStarted(false);
    setRunning(false);
    setEditing(false);
    setMinutesInitial(currentMinutes);
    if (parseInt(currentMinutes) === 0) {
      setCurrentMinutes('1');
    }
  }
  function countCancel() {
    if (parseInt(currentMinutes) === 0 && countSeconds === 0) {
      setRunning(true);
    }
    setCurrentMinutes(minutesInitialSave);
    setEditing(false);
  }
  function showActions() {
    let content;
    if (!hasStarted) {
      content = <Button title={'Start'} trigger='start' onPress={countStart} />
    }
    if (hasStarted) {
      if (isRunning) {
        content = <Button title={'Pause'} trigger='pause' onPress={countPause} />
      }
      if (!isRunning) {
        content = <React.Fragment>
          <Button title={'Continue'} trigger='continue' onPress={countContinue} />
          <Button title={'Delete'} trigger='delete' onPress={countDelete} style={{ marginTop: 32 }} />
        </React.Fragment>
      }
    }
    if (parseInt(currentMinutes) === 0 && countSeconds === 0) {
      content = <Button title={'Repeat'} trigger='repeat' onPress={countRepeat} />;
    }
    return content;
  }

  function showCountMinutes() {
    let minutesAdjuted = currentMinutes;
    let secondsAdjusted: number | string;
    if (countSeconds === 0) {
      secondsAdjusted = '00'
    } else {
      secondsAdjusted = countSeconds;
      if (countSeconds < 10) {
        secondsAdjusted = `0${countSeconds}`;
      }
    }
    if (parseInt(currentMinutes) < 10) {
      minutesAdjuted = `0${currentMinutes}`
    }

    return `${minutesAdjuted}:${secondsAdjusted}`;
  }

  function handlerSwiper() {
    if (isRunning) {
      setSwiperClick(swiperClick => !swiperClick);
    }
  }
  function handlerToggleSound() {
    if (toggleSound) {
      setToggleSound(false)
      sound?.setVolumeAsync(0.0)
    }
    if (!toggleSound) {
      setToggleSound(true)
      sound?.setVolumeAsync(1.0);
    }
  }

  function setCountMinutes(value: string) {
    setCurrentMinutes(value)
  }

  return (
    <Container
      finished={(((parseInt(currentMinutes) === 0 && countSeconds === 0) && !isEditing) ? false : true)}
      paused={(hasStarted && !isRunning && !isEditing) ? true : false}>
      <Header>
        {((parseInt(currentMinutes) === 0 && countSeconds === 0) && !isEditing) && <HeaderText>Finished!</HeaderText>}
        {((parseInt(currentMinutes) >= 0 && countSeconds > 0) && !isEditing) &&
          <SoundEffect onPress={handlerToggleSound}>
            <SoundEffectIcon name={toggleSound ? "volume-up" : "volume-mute"} paused={(hasStarted && !isRunning && !isEditing) ? true : false} />
          </SoundEffect>}
      </Header>
      <WrapperMain >
        {isEditing ?
          <WrapperMainEdit>
            <CountEdit
              value={currentMinutes}
              onChangeText={setCountMinutes}
              maxLength={6}
              keyboardType="number-pad"
            />
            <DescriptionEdit
              onChangeText={setDescription}
              value={descripiton}
              multiline={true}
              numberOfLines={4}
              keyboardType="default"
            />
          </WrapperMainEdit> :
          <React.Fragment>
            <WrapperMainCurrent swipper={swiperClick}>
              <CountCurrent
                swipper={swiperClick}
                paused={((hasStarted && !isRunning) && !isEditing) ? true : false} >
                {showCountMinutes()}
              </CountCurrent>
              <DescriptionCurrent
                swipper={swiperClick}
                paused={((hasStarted && !isRunning) && !isEditing) ? true : false}>
                {descripiton}
              </DescriptionCurrent>
            </WrapperMainCurrent>
            <WrapperMainSwippper swipper={swiperClick}>
              {isRunning && <WrapperMainSwippperIcon onPress={handlerSwiper} name={swiperClick ? "angle-double-up" : "angle-double-down"} size={44} />}
            </WrapperMainSwippper>
          </React.Fragment>
        }
      </WrapperMain>
      {!isEditing && <Actions swipper={swiperClick}>{showActions()}</Actions>}
      <Footer swipper={swiperClick}>
        {isEditing ?
          <React.Fragment>
            <ButtonActionCount trigger="cancel" onPress={countCancel} />
            {(parseInt(currentMinutes) > -1) && <ButtonActionCount trigger="accept" onPress={countSave} />}
          </React.Fragment> :
          (!hasStarted || isFinished) && <ButtonActionCount trigger="edit" onPress={countEdit} />
        }
      </Footer>
    </Container>
  )
}