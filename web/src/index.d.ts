declare module '*.svg' {
  const url: string;
  export default url;
}

declare module 'inteobs' {
  const d: typeof IntersectionObserver;
  export default d;
}
