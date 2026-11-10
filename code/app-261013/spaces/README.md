# spaces

Spaces / Pages / Sites 的路由与页面实现。49 个 chunk，原始 480,131 B。

- `pages/space-route-*.js`：`/spaces/:spaceId` 的 `SpaceDetailRoute`；
- `pages/space-sidebar-*.js`：All / Pages / Slides / Images / Files / Pinned / Recents / Spaces / Trash；
- `pages/space-1fd481862d3e.js`：Space 创建状态机（本地记录、锁、root Page、外观、邀请）；
- `pages/space-root-setup-*.js`：root Page 初始化；
- `pages/space-trash-items-*.js`：回收站与恢复 API；
- `pages/space-page-*.js` / `space-library-file-route-*.js` / `space-sites-page-*.js`：Page / 文件 / Sites；
- `_deps/page-*.js`、`new-space-dialog-*.js`、`sharing-*.js`：闭环依赖。

分析见 `../../spaces.md`。注意 `_deps/pricing-page-*` 等是闭包噪声，不属于 Spaces 功能。
