package com.springrestApi.springrestApi.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrestApi.springrestApi.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long>
{
	
}
