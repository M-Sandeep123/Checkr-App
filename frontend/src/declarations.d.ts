declare module '*.png'
declare module '*.gif'
declare module '*.svg' {
  const content: string
  export default content
}