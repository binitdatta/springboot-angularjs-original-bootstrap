package com.rollingstone.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.rollingstone.model.User;


@RepositoryRestResource
public interface UserRepository extends CrudRepository<User, Integer> {

	List<User> findByFirstName(@Param("firstName") String firstName);
	List<User> findByLastName(@Param("lastName") String lastName);

}
