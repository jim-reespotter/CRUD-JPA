package crud.jpa.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crud.jpa.backend.models.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {
    
}
