import { StyledTag } from "./Tag.styled";

type Props = {
  children: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 *  @usage onClick={(e) => e.currentTarget.textContent.split(" ")[1]}
 */
const Tag = (props: Props) => {
  const { children, onClick } = props;

  return <StyledTag onClick={onClick}># {children}</StyledTag>;
};

export default Tag;
