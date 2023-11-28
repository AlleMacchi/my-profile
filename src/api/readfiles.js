import { promises as fs } from 'fs';

export default async function ReadFiles(props) {
  const file = await fs.readFile(process.cwd() + props.url, 'utf8');

  return (
    <>
      {file}
    </>
  );
}