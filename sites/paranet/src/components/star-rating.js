/** @jsx jsx */
import { jsx} from "theme-ui"

const StarRating = ({ starRating }) => {
    const rating = starRating;
    let starCount = 'noStar'
    let starGFX = ''
    switch (rating) {
        case '5':
        starCount = 'fiveStar';
        starGFX = '★★★★★'
          break;
        case '4':
        starCount = 'fourStar';
        starGFX = '★★★★'
        
            break;
        case '3':
        starCount = 'threeStar';
        starGFX = '★★★'
                break;
        case '2':
        starCount = 'twoStar';
        starGFX = '★★'
                break;
        case '1':
        starCount = 'oneStar';
        starGFX = '★'
                break;
        default:
        starCount = 'noStar';
      }
      
  return (
  <div css={{color: '#ffab43'}}>{starGFX}</div>
  )
}

export default StarRating

