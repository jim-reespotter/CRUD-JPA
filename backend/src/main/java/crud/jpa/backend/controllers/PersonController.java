package crud.jpa.backend.controllers;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.querydsl.core.types.Predicate;

import crud.jpa.backend.models.Person;
import crud.jpa.backend.models.QPerson;
import crud.jpa.backend.repositories.PersonRepository;


@RestController
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    private PersonRepository pRepo;

    @GetMapping("")
    Collection<Person> getPersons(
            @RequestParam("start") Integer start, 
            @RequestParam("size") Integer size,
            @RequestParam("filter") Optional<String> filter,
            @RequestParam("sort") Optional<String> sort,
            @RequestParam("desc") Optional<String> desc) {
        if (filter.isEmpty()) filter = Optional.of("");
        if (sort.isEmpty()) sort = Optional.of("lastname");
        return pRepo.findAll(
            QPerson.person.firstname.lower().startsWith(filter.get())
                    .or(QPerson.person.lastname.lower().startsWith(filter.get())),
            PageRequest.of(start, size, 
                    Sort.by(
                        desc.isPresent() ? Direction.DESC : Direction.ASC,
                        sort.get()))
        ).getContent();
    }
    
    @GetMapping("count")
    Long getCount(@RequestParam("filter") Optional<String> filter) {
        if (filter.isPresent())
            return pRepo.count(
                QPerson.person.firstname.lower().startsWith(filter.get())
                    .or(QPerson.person.lastname.lower().startsWith(filter.get()))
        );
        else
            return pRepo.count();
    }
}
