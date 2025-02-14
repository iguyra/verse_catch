import URLbaseAPI from "shared/functions/URLbaseAPI";

import io from "socket.io-client";

export default io(URLbaseAPI, {
  path: "/api/chat",
  withCredentials: true,
});
