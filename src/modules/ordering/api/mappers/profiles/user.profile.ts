import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

import { User as UserObject } from '../../objects';

import { UserFindOneByIdResponse } from '@/modules/ordering/application';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      // Response -> ObjectType
      createMap(
        mapper,
        UserFindOneByIdResponse,
        UserObject,
        forMember(
          (destination) => destination.id,
          mapFrom((source) => source.user.id),
        ),
        forMember(
          (destination) => destination.name,
          // TODO: 動作確認のため末尾aaaaaをつけている。fullname とかにする。
          mapFrom((source) => source.user.name + 'aaaaa'),
        ),
      );
    };
  }
}
