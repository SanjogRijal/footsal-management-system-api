import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamPlayerDto } from './create-team_player.dto';

export class UpdateTeamPlayerDto extends PartialType(CreateTeamPlayerDto) {}
