package com.shivendra.deployApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.shivendra.deployApp.repository")
@EntityScan("com.shivendra.deployApp.model")
public class DeployAppApplication {
	public static void main(String[] args) {
		SpringApplication.run(DeployAppApplication.class, args);
	}

}
