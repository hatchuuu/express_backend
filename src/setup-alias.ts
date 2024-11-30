import moduleAlias from "module-alias";
import path from "path";

// Register alias
moduleAlias.addAlias("@", path.resolve(__dirname));
