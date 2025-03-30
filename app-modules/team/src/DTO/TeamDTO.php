<?php

namespace Modules\Team\DTO;

class TeamDTO
{
    public $id;
    public $name;
    public $surname;
    public $email;
    public $organisation_id;

    public function __construct($name, $surname, $email, $organisation_id)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->email = $email;
        $this->organisation_id = $organisation_id;
    }
}
