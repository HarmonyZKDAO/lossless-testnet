import config from './hardhat.config';
import { dependencyCompiler, external } from './hardhat.config.dependencies';

config.dependencyCompiler = dependencyCompiler;
config.external = external;

export default config;
