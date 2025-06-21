declare module "element-plus";
/* eslint-disable */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
declare module '*.css' {
    const content: any;
    export default content;
}
declare module '*.scss' {
    const content: any;
    export default content;
}
