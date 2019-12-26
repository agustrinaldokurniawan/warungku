const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
  ac.grant("warung")
    .readOwn("profile")
    .updateOwn("profile");

  ac.grant("agen")
    .extend("warung")
    .readAny("profile");

  ac.grant("admin")
    .extend("warung")
    .extend("agen")
    .updateAny("profile")
    .deleteAny("profile");

  return ac;
})();
