package com.springrestApi.springrestApi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springrestApi.springrestApi.entities.Course;
import com.springrestApi.springrestApi.services.CourseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MyController {
	
	@Autowired
	private CourseService CourseService;
	
	@GetMapping("/home")
	public String home()
	{
		return "Welcome To Course App !!!!!";
	}
	
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		
		return this.CourseService.getCourses();
		
	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.CourseService.getCourse(Long.parseLong(courseId));
	}
	 
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course)
	{
		return this.CourseService.addCourse(course); 
	}
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course)
	{
		return this.CourseService.updateCourse(course);
	}
	
	@DeleteMapping("courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId)
	{
		try 
		{
			this.CourseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}














