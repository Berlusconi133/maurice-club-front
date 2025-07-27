
import "./globals.css";


function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );  
} 
export default RootLayout;