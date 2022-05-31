declare module '*.css' {
  const css: string;
  export default css;
}

declare module '*.less';

declare interface CSSStyleDeclaration {
  webkitAppRegion: 'no-drag' | 'drag'
}
