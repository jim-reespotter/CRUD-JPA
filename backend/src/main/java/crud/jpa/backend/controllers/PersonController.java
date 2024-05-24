package crud.jpa.backend.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import crud.jpa.backend.models.Person;
import crud.jpa.backend.repositories.PersonRepository;


@RestController
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    private PersonRepository pRepo;

    @GetMapping("")
    Collection<Person> getPersons(@RequestParam("start") Integer start, @RequestParam("size") Integer size) {
        return pRepo.findAll(PageRequest.of(start, size)).getContent();
    }
    
    @GetMapping("count")
    Long getCount() {
        return pRepo.count();
    }
}
