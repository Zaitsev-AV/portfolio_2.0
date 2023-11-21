import iconsSprite from "../../assets/images/sprite-icons.svg";

interface Props {
  height?: string;
  iconId: string;
  viewBox?: string;
  width?: string;
}
export const Icon = (props: Props) => {
  const { height = "50", iconId, viewBox = "0 0 50 50", width = "50" } = props;

  return (
    <svg
      height={height}
      viewBox={viewBox}
      width={width}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  );
};
