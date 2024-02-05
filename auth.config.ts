import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user?.email;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // const isOnWebtest = nextUrl.pathname.startsWith('/webtest');
      
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;


// if (isOnDashboard) {
//   if (isLoggedIn) {
//     // Check role and redirect to dashboard if role is admin
//     if (auth.user?.role === 'Admin') {
//       return true; 
//     } else {
//       return false; // Redirect non-admin users to login page
//     }
//   }
//   return false; // Redirect unauthenticated users to login page
// } else if (isLoggedIn) {
//   // Redirect authenticated users to dashboard if role is admin
//   if (auth.user?.role === 'Admin') {
//     return Response.redirect(new URL('/dashboard', nextUrl));
//   }
// }

// if (isOnWebtest) {
//   if (isLoggedIn) {
//     // Check role and redirect to webtest if role is user
//     if (auth.user?.role === 'User') {
//       return true;
//     } else {
//       return false; // Redirect non-user users to login page
//     }
//   }
//   return false; // Redirect unauthenticated users to login page
// } else if (isLoggedIn) {
//   // Redirect authenticated users to webtest if role is user
//   if (auth.user?.role === 'User') {
//     return Response.redirect(new URL('/dashboard', nextUrl));
//   }
// }