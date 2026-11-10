import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { jDt as t, kDt as n } from "./app-shared-bbfeca5e5737.js";
function r(e) {
  switch (e) {
    case `macOS`:
      return n({
        id: `downloads.popover.showInFinder`,
        defaultMessage: `Show in Finder`,
        description: `Action that reveals a downloaded file in Finder`,
      });
    case `windows`:
      return n({
        id: `downloads.popover.showInFileExplorer`,
        defaultMessage: `Show in File Explorer`,
        description: `Action that reveals a downloaded file in File Explorer`,
      });
    case `linux`:
      return n({
        id: `downloads.popover.showInFileManager`,
        defaultMessage: `Show in File Manager`,
        description: `Action that reveals a downloaded file in the system file manager`,
      });
  }
}
function i() {
  return (i = e(() => {
    t();
  }))();
}
export { i as n, r as t };
//# sourceMappingURL=download-file-manager-message-b11c6f057796.js.map
