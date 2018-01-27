import asyncRoute from 'lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const About = asyncRoute(() => import('./About'));
export const Page = asyncRoute(() => import('./Page'));
export const Posts = asyncRoute(() => import('./Posts'));