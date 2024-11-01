import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Add the UMD script for tw-elements */}
        <script
          type="text/javascript"
          src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
        ></script>
      </body>
    </Html>
  );
}
