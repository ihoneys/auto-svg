# auto-svg
组件方式使用 svg

## 添加图标

将图标放入 src/svg 文件夹下 📁，运行下面命令

```shell
yarn svg
// or
npm svg
```

## 使用

```tsx
import { Icon } from "./components/Icon";

<Icon icon='b-font-{图标名称}' size={55}/>
```