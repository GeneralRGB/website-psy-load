import Preview from "./Preview/Preview";
import Songs from "./Songs/Songs";
import About from "./About/About";
import { Photos } from "./Photos/Photos";

export interface Props {
  language: string;
}

export const MainPage = ({ language }: Props) => {
  return (
    <>
      <Preview language={language} />
      <Songs language={language} />
      <Photos language={language} />
      <About language={language} />
    </>
  );
};
