import { configService } from '../src/config/config.service';
import * as fs from 'fs';

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(configService.getTypeOrmConfig(), null, 2),
);
