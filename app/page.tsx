import Hero from "./Hero";



export default function RootLayout({ children }) {

return (

<html lang="en">

<body>{children}</body>
<Hero />

</html>

);

}