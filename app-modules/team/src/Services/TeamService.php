<?php

namespace Modules\Team\Services;

use Modules\Team\DTO\TeamDTO;
use Modules\Team\Models\Member;

class TeamService
{
    public function createTeamRecord(TeamDTO $teamDTO) : Member
    {
        //Here we can create and save our data member DTO and saving to the Member Model
        //This helps to de-couple the business logic from the presentation logic
        $team = new Member();
        $team->name = $teamDTO->name;
        $team->surname = $teamDTO->surname;
        $team->email = $teamDTO->email;
        $team->organisation_id = $teamDTO->organisation_id;
        $team->save();
        return $team;
    }
}
