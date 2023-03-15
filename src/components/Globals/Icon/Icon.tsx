import { ReactComponent as Calendar } from '../../../assets/icons/calendar.svg'
import { ReactComponent as Rating } from '../../../assets/icons/rating.svg'
import { ICON } from '../../../constants/icon.constant'
import defaultTheme from '../../../styles/Theme.styled'
import { IconProp } from './Icon.type'

const Icon = ({ color = defaultTheme.colors.red, size, type }: IconProp) => {
  switch (type) {
    case ICON.CALENDAR: {
      return (
        <Calendar
          fill={color}
          stroke={color}
          width={size || '24px'}
          height={size || '24px'}
        />
      )
    }
    case ICON.RATING: {
      return (
        <Rating
          fill={color}
          stroke={color}
          width={size || '24px'}
          height={size || '24px'}
        />
      )
    }
    default: {
      return <div></div>
    }
  }
}

export default Icon
