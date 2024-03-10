package com.example.accessingdatamysql;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity // This tells Hibernate to make a table out of this class
public class Status {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer status_id;

  private String status;

  @OneToMany(fetch = FetchType.EAGER, mappedBy = "status")
  private List<Timesheet> timesheet;

  public Integer getId() {
    return status_id;
  }

  public void setId(Integer id) {
    this.status_id = id;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

}