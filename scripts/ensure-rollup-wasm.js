import fs from 'fs';
import path from 'path';

// If on Windows and native rollup dlopen is restricted by AppLocker / WDAC policies,
// this ensures rollup safely falls back to @rollup/wasm-node.
try {
  const nativeJsPath = path.resolve('node_modules/rollup/dist/native.js');
  if (fs.existsSync(nativeJsPath)) {
    let content = fs.readFileSync(nativeJsPath, 'utf8');
    const target = "if (error instanceof Error && error.code === 'ERR_DLOPEN_FAILED') {\n\t\t\tthrow error;\n\t\t}";
    const replacement = "if (error instanceof Error && error.code === 'ERR_DLOPEN_FAILED') {\n\t\t\ttry {\n\t\t\t\treturn require('@rollup/wasm-node/dist/native.js');\n\t\t\t} catch (_) {\n\t\t\t\tthrow error;\n\t\t\t}\n\t\t}";
    if (content.includes(target)) {
      content = content.replace(target, replacement);
      fs.writeFileSync(nativeJsPath, content, 'utf8');
    }
  }
} catch {
  // Silent fail if node_modules not yet present
}

