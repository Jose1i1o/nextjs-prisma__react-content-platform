import { 
	Sandpack,
  SandpackProvider, 
  SandpackLayout, 
  SandpackCodeEditor, 
  SandpackFileExplorer, 
  SandpackTheme
} from "@codesandbox/sandpack-react";

import { theme } from '../../../../../theme/theme';

const WithFiles = () => {

  const myTheme = theme.sandBox as SandpackTheme;

  return (
				<SandpackProvider template="react" theme={ myTheme }>
    			<SandpackLayout>
    			  <SandpackFileExplorer />
    			  <SandpackCodeEditor />
    			</SandpackLayout>
  			</SandpackProvider>
  );
}

export default WithFiles;