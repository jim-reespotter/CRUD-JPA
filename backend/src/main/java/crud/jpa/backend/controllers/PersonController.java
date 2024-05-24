package crud.jpa.backend.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crud.jpa.backend.models.Person;
import crud.jpa.backend.repositories.PersonRepository;


@RestController
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    private PersonRepository pRepo;

    @GetMapping("")
    Collection<Person> getPersons() {
        return pRepo.findAll();
    }
    
}
