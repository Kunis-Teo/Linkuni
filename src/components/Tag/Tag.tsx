import styled from "styled-components";

const StyledTag = styled.button`
  padding: 4px 8px;
  background-color: #ebedf0;
  border-radius: 20px;

  &:hover {
    background-color: #ebedf090;
  }
`;

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
