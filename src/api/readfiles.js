import { promises as fs } from 'fs';
import path from 'path';

export default async function ReadFiles(props) {
  const filePath = props.path;
  const buffer = await fs.readFileSync(path.join(process.cwd(), 'public', filePath), 'utf-8');
  const fileContent = buffer.toString();

  return (
    <>
      {fileContent}
    </>
  );
}