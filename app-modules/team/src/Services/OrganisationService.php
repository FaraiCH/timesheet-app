<?php

namespace Modules\Team\Services;

use Modules\Team\DTO\OrganisationDTO;
use Modules\Team\Models\Organisation;

class OrganisationService
{
    public function createOrganisationRecord(OrganisationDTO $organisationDTO) : Organisation
    {
        //Here we can create and save our data from organisation DTO and saving to the Organisation Model
        //This helps to de-couple the business logic from the presentation logic
        $organisation = new Organisation();
        $organisation->name = $organisationDTO->name;
        $organisation->save();
        return $organisation;
    }
}
