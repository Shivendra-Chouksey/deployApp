package com.shivendra.deployApp.controller;

import com.shivendra.deployApp.model.Customer;
import com.shivendra.deployApp.repository.CustomerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
    private final CustomerRepository repository;

    public CustomerController(CustomerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/customers")
    public ResponseEntity<?> getAllCustomers() {
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping
    public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
        if (repository.existsByName(customer.getName())) {
            return ResponseEntity.badRequest().body("Customer name already exists");
        }
        return ResponseEntity.ok(repository.save(customer));
    }
    // ("/api/customers") => POST {"name":"John Doe","mobileNumber":"1234567890"}

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable Long id, @RequestBody Customer customer) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        customer.setId(id);
        return ResponseEntity.ok(repository.save(customer));
    }

    @GetMapping("/health")
    public ResponseEntity<?> checkHealth() {
        return ResponseEntity.ok("Backend is healthy");
    }

    @GetMapping("/db-status")
    public ResponseEntity<?> checkDbStatus() {
        try {
            repository.count();
            return ResponseEntity.ok("Database is connected");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Database connection failed");
        }
    }
}
