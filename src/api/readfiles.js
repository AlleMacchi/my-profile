import fs from 'fs';
import path from 'path';

export default function ReadFiles(props) {
  const filePath = props.path;
  const buffer = fs.readFileSync(path.join(process.cwd(), 'public', filePath), 'utf-8');
  const fileContent = buffer.toString();

  return (
    <>
      {fileContent}
    </>
  );
}