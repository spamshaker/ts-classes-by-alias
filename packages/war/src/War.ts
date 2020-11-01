import {BaseWar} from '@war-core/BaseWar';

export class War extends BaseWar {
  get time(): Date {
    return new Date();
  }
}
