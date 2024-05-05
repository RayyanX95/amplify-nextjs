// "use client";

// import { Amplify } from "aws-amplify";
// import awsExports from "../../aws-exports";
// import { Authenticator } from "@aws-amplify/ui-react";

// import "@aws-amplify/ui-react/styles.css";
// // import "../styles/globals.css";

// Amplify.configure({ ...awsExports });

// export default function Home() {
//   console.log("2020", 2020);
//   return (
//     <Authenticator>
//       {({ signOut, user }) => {
//         debugger;

//         console.log("user", user);
//         return (
//           <main>
//             <h1>Hello, {user?.username}!</h1>
//             <button onClick={signOut}>Sign out</button>
//           </main>
//         );
//       }}
//     </Authenticator>
//   );
// }
