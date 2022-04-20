import ManifestHandler from '../../main/handlers/manifestHandler';
import { CookieManagerConfig } from '../../main/interfaces/Config';
jest.mock('../../main/handlers/manifestHandler');

export const MockManifestHandler = () => new ManifestHandler({} as CookieManagerConfig);
