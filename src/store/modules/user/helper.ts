import { ss } from '@/utils/storage'
import { t } from '@/locales'
const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://bbs.nies.live/uploads/default/optimized/1X/40585fd41e6156b114fa647d53278aaeb74043b0_2_180x180.png',
      name:  t('Niege Chat'),//'Niege Chat',
      description: '© <a href="https://bbs.nies.live" class="" target="_blank" >Niege AI Community</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
