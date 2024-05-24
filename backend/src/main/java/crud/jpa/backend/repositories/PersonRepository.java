package crud.jpa.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import crud.jpa.backend.models.Person;

@Repository
public interface PersonRepository extends PagingAndSortingRepository<Person, Integer>, CrudRepository<Person, Integer> {
    
}
