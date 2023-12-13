import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackTests,
} from "@codesandbox/sandpack-react";

const WithTests = () => (
  <SandpackProvider
    template="test-ts"
    options={{
      activeFile: "/add.ts",
      visibleFiles: ["/add.ts"],
    }}
  >
    <SandpackLayout>
      <SandpackCodeEditor />
      <SandpackTests hideTestsAndSupressLogs />
    </SandpackLayout>
  </SandpackProvider>
);

export default WithTests;