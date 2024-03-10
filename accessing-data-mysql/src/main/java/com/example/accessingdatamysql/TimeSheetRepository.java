package com.example.accessingdatamysql;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TimeSheetRepository extends CrudRepository<Timesheet, Integer> {
    //@Query("select timesheet_id, project, task, toDate, fromDate, user_id, status_id  from Timesheet T WHERE T.task LIKE '%:searchTerm%'")
    //List<Timesheet> getTask(@Param("searchTerm") String searchTerm);

    @Query(value = "SELECT * FROM Timesheet T WHERE LOWER(T.task) LIKE LOWER(concat('%', ?1,'%'))", nativeQuery = true)
    List<Timesheet> getTask(String searchTerm);
}