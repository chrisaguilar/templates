import { env } from '~config';

const devtool: string = env === 'production' ? 'source-map' : 'eval';

export { devtool };
