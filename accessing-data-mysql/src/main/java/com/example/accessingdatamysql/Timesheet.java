package com.example.accessingdatamysql;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.TemporalType;
import jakarta.persistence.Temporal;
import java.util.Date;


@Entity // This tells Hibernate to make a table out of this class
public class Timesheet {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer timesheet_id;

  private String project;

  private String task;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", referencedColumnName = "user_id")
  private User user;

  @Temporal(TemporalType.DATE)
  private Date fromDate;

  @Temporal(TemporalType.DATE)
  private Date toDate;
 
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "status_id", referencedColumnName = "status_id")
  private Status status;


  public Integer getId() {
    return timesheet_id;
  }

  public void setId(Integer id) {
    this.timesheet_id = id;
  }

  public String getProject() {
    return project;
  }

  public void setProject(String project) {
    this.project = project;
  }

  public String getTask() {
    return task;
  }

  public void setTask(String task) {
    this.task = task;
  }

  public Date getFrom() {
    return fromDate;
  }

  public void setFrom(Date fromDate) {
    this.fromDate = fromDate;
  }
  public Date getTo() {
    return toDate;
  }

  public void setTo(Date toDate) {
    this.toDate = toDate;
  }

  public User getUser() {
    return this.user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Status getStatus() {
    return this.status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }
}