import { theme } from "../../../../../theme/theme";
import {
  SandpackProvider,
  SandpackCodeEditor,
  useSandpack,
  SandpackTheme,
} from "@codesandbox/sandpack-react";

function ActiveFileDisplay() {
  const { sandpack: { activeFile } } = useSandpack();
  
  return (
    <h1>Current file: {activeFile}</h1>
  );
}

const myTheme = theme.sandBox as SandpackTheme;

const OnlyFiles = () => {

  return (
    <SandpackProvider
      template="react"
      theme={myTheme}
      files={{
        '/App.js': 'export default function App(){}',
        '/Button.js': 'export default function Button(){}',
        '/Card.js': 'export default function Card(){}',
      }}
    >
      <ActiveFileDisplay />
      <SandpackCodeEditor />
    </SandpackProvider>
  );
}

export default OnlyFiles;