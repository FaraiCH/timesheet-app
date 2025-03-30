<?php

namespace Modules\Team\DTO;

class OrganisationDTO
{
    public $id;
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }
}
