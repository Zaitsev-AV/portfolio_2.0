import iconsSprite from '../../assets/images/sprite-icons.svg'

interface Props {
  iconId: string
  width: string
  height: string
}
export const Icon = (props: Props) => {
  const {iconId, height, width} = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <use xlinkHref={`${iconsSprite}#${iconId}`}/>
    </svg>

  );
};