import React from 'react'
import styled from 'react-emotion'
import Icon from 'universal/components/Icon'
import {StreamUI} from '../hooks/useSwarm'
import MediaSwarm from '../utils/swarm/MediaSwarm'
import MediaControlToggle from './MediaControlToggle'
import {ICON_SIZE} from 'universal/styles/typographyV2'

const Toggle = styled(MediaControlToggle)({})
const StyledIcon = styled(Icon)({
  fontSize: ICON_SIZE.MD18
})

interface Props {
  localStreamUI: StreamUI
  swarm: MediaSwarm
}

const AudioToggle = (props: Props) => {
  const {swarm, localStreamUI} = props
  const {hasAudio} = localStreamUI
  const onClick = async () => {
    if (hasAudio) {
      swarm.muteWebcamAudio()
    } else {
      try {
        await swarm.broadcastWebcam('audioOnly')
      } catch (e) {
        /**/
      }
    }
  }
  return (
    <Toggle onClick={onClick}>
      <StyledIcon>{hasAudio ? 'mic' : 'mic_off'}</StyledIcon>
    </Toggle>
  )
}

export default AudioToggle
