import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy load page components
const Home = lazy(() => import('@/pages/Home'));
// const About = lazy(() => import('@/pages/About'));
// const Archive = lazy(() => import('@/pages/Archive'));
// const YearArchive = lazy(() => import('@/pages/YearArchive'));
// const Resources = lazy(() => import('@/pages/Resources'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Wrap lazy-loaded components with Suspense
const withSuspense = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  );
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      // {
      //   path: 'about',
      //   element: withSuspense(About),
      // },
      // {
      //   path: 'archive',
      //   children: [
      //     {
      //       index: true,
      //       element: withSuspense(Archive),
      //     },
      //     {
      //       path: '2023',
      //       element: withSuspense(YearArchive),
      //       loader: async ({ params }) => {
      //         try {
      //           const response = await fetch(`/api/archive/${params.year}`);
      //           if (!response.ok) throw new Error('Archive not found');
      //           return response.json();
      //         } catch (error) {
      //           throw new Error(`Failed to load archive for year ${params.year}`);
      //         }
      //       },
      //       errorElement: withSuspense(NotFound)
      //     }
      //   ]
      // },
      // {
      //   path: 'resources',
      //   element: withSuspense(Resources),
      // },
    ]
  },
  {
    path: '*',
    element: withSuspense(NotFound),
  }
];