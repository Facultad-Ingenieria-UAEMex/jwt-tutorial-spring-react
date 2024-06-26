package com.mayhrem.jwt.backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


// !This ia a controller and we're going to use the notation
@CrossOrigin("http://localhost:3000")
@RestController
public class MessagesController {

  @GetMapping("/messages")
  public ResponseEntity<List<String>> messages () {
    return ResponseEntity.ok(Arrays.asList("first", "second")); 
  }
  
}
